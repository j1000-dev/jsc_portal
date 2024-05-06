import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";
//Date imports
import dayjs from 'dayjs';
import { format } from 'date-fns';
// Ant Design imports
import { DatePicker, Input, Radio, Form, Image, Upload, Button, Checkbox, Row, Col } from "antd";
import type { RadioChangeEvent, FormProps } from 'antd';
import { useForm } from "antd/es/form/Form";
import { Rule } from 'antd/lib/form';
import { UploadOutlined } from '@ant-design/icons';

interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
};

interface Place {
    address_components: AddressComponent[];
};

interface SportOptions {
    value: number;
    label: string;
};

interface Form {
    image_path: string;
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    province: string;
    dob: string;
    has_car: boolean;
    university_bio_link: string | null;
    biography: string | null;
    school_name: string;
    faculty: string | null;
    program: string | null;
    year_of_study: string;
    sport_options: Array<number>;
};

export default function SignUp() {
    const [form] = useForm();
    const [imagePath, setImagePath] = useState<string>('');
    const [hasCar, setHasCar] = useState<boolean>();
    const [bioRequired, setBioRequired] = useState<boolean>(true);
    const [sportOptions, setSportOptions] = useState<SportOptions[]>([]);
    const { TextArea } = Input;

    useEffect(() => {
        axios.get('/sports')
            .then(({ data }) => {
                const options = data.map((sport: { id: number, name: string }) => ({ label: sport.name, value: sport.id }));
                setSportOptions(options);
            })
    }, []);

    // Google location autocomplete
    const getLocationComponent = (place: Place, types: Array<string>) => {
        const addressComponents = place.address_components;
        const result: { [key: string]: { long_name: string, short_name: string } } = {};
        addressComponents.forEach(component => {
            component.types.forEach(type => {
                if (types.includes(type)) {
                    result[type] = {
                        long_name: component.long_name,
                        short_name: component.short_name
                    }
                }
            });
        });
        return result;
    }

    // Custom validation function
    const validateYearOfStudy = (rule: Rule, value: string) => {
        // Regular expressions to match 20XX and 19XX years and grades 1-12
        const yearRegex = /^(20|19)\d{2}$/;
        const gradeRegex = /^(1[0-2]|[1-9])$/;

        // Check if the input matches the required format
        if (value && (!gradeRegex.test(value) && !yearRegex.test(value))) {
            return Promise.reject('Not valid. Please enter a year starting with 20XX or 19XX or grade between 1-12!');
        }
        return Promise.resolve();
    };

    const validatePhoneNumber = (rule: Rule, value: string) => {
        //Regex to match XXX-XXX-XXXX number
        const numberRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (value && !numberRegex.test(value)) {
            return Promise.reject('Not valid. Please enter a phone number with the format XXX-XXX-XXXX!');
        }
        return Promise.resolve();
    }

    const onFinish: FormProps<Form>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="md:mx-auto pt-10 h-screen w-full">
            <div className="flex flex-col items-center">
                <div className="border-t border-b border-gray-100"><Banner /></div>
                <Form
                    form={form}
                    className="flex flex-col items-center"
                    variant="outlined"
                    layout="vertical"
                    onFinish={onFinish}
                    style={{ width: '70%' }}
                >
                    {imagePath ? (
                        <Image src={imagePath} alt="Uploaded Image" width={250} className="rounded-full pt-3" />
                    ) : (
                        <Image src="/img/blank-profile-picture.png" width={250} className="pt-3" />
                    )}
                    <Form.Item
                        label="Upload a picture"
                        name="image_path"
                        rules={[{ required: true, message: "Please upload a picture!" }]}
                    >
                        <Upload
                            maxCount={1}
                            beforeUpload={(file: File) => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    if (typeof reader.result === 'string') {
                                        form.setFieldValue('image_path', reader.result)
                                        setImagePath(reader.result)
                                    }
                                };
                                reader.readAsDataURL(file);
                                // False to prevent default upload behaviour
                                return false;
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Upload Image</Button>
                        </Upload>
                    </Form.Item>
                    <div className="section bg-slate-100 rounded-md my-3 w-full">
                        <h1 className="text-center text-xl font-semibold tracking-wide py-5">Personal Information</h1>
                        <div className="w-full grid gap-6 mb-3 md:grid-cols-2">
                            <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'Please enter your first name!' }]}>
                                <Input placeholder="Enter first name" className="block rounded-lg" />
                            </Form.Item>
                            <Form.Item name="last_name" label="Last Name" rules={[{ required: true, message: 'Please enter your last name!' }]}>
                                <Input placeholder="Enter last name" className="block rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Address"
                                initialValue={''}
                                rules={[{ required: true, message: 'Please enter your address!' }]}
                            >
                                <Autocomplete
                                    apiKey={window.env.GOOGLE_MAPS_API_KEY}
                                    onPlaceSelected={(place) => {
                                        let location = getLocationComponent(place, ['locality', 'administrative_area_level_1', 'postal_code']);
                                        form.setFieldsValue({
                                            'address': place.formatted_address,
                                            'city': location.locality.long_name,
                                            'province': location.administrative_area_level_1.short_name,
                                            'postal_code': location.postal_code.long_name
                                        })
                                        form.setFieldValue('city', location.locality.long_name)
                                    }}
                                    className="w-full block rounded-lg hover:border-blue-500 placeholder-gray-400"
                                    placeholder="Enter full address"
                                    options={{
                                        types: ["geocode"],
                                        componentRestrictions: { country: "ca" },
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="city"
                                label="City"
                                initialValue={''}
                                hidden // Hide city as it's automatically populated in address
                            ><Input /></Form.Item>
                            <Form.Item
                                name="province"
                                label="Province"
                                initialValue={''}
                                hidden // Hide province as it's automatically populated in address
                            ><Input /></Form.Item>
                            <Form.Item
                                name="dob"
                                label="Date of Birth (yyyy/mm/dd)"
                                rules={[{ required: true, message: 'Please enter your birthday!' }]}
                            >
                                <DatePicker
                                    format={'YYYY/MM/DD'}
                                    size="large"
                                    maxDate={dayjs(format(new Date(), 'yyyy-MM-dd'), 'YYYY/MM/DD')}
                                    onChange={(date) => {
                                        form.setFieldValue('dob', date)
                                    }}
                                    placeholder="Enter date of birth"
                                    className="w-full"
                                />
                            </Form.Item>
                            <Form.Item className="flex justify-center items-center" name="has_car" label="Car Accessibility" rules={[{ required: true, message: 'Please enter your car accessibility!' }]}>
                                <Radio.Group value={hasCar} onChange={(e: RadioChangeEvent) => setHasCar(e.target.value)}>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item name="university_bio_link" label="University Biography Link (optional)">
                                <Input
                                    placeholder="Enter university bio link"
                                    className="block rounded-lg"
                                    // If this is provided, biography is not required
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.value.trim() != '') {
                                            setBioRequired(false);
                                            // Need to revalidate here to clear the required message
                                            form.validateFields(['biography']);
                                        } else {
                                            setBioRequired(true);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="biography" label="Biography" rules={[{ required: bioRequired, message: 'Please enter your biography!' }]}>
                                <TextArea placeholder="Enter biography" autoSize={{ minRows: 2 }} />
                            </Form.Item>
                            <Form.Item name="school_name" label="University (or High School)" rules={[{ required: true, message: 'Please enter your school!' }]}>
                                <Input placeholder="Enter institution" className="block rounded-lg" />
                            </Form.Item>
                            <Form.Item name="faculty" label="Faculty (if applicable)">
                                <Input placeholder="Enter faculty" className="block rounded-lg" />
                            </Form.Item>
                            <Form.Item name="program" label="Program (if applicable)">
                                <Input placeholder="Enter program" className="block rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="year_of_study"
                                label="Current year of study or year of degree (or high school grade)"
                                rules={[
                                    { required: true, message: 'Please enter a year or grade!' },
                                    { validator: validateYearOfStudy } // Apply custom validation
                                ]}
                            >
                                <Input placeholder="Enter year of study / degree / high school grade" className="block rounded-lg" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="section bg-slate-100 rounded-md my-3 w-full">
                        <h1 className="text-center text-xl font-semibold tracking-wide py-5">Contact Information</h1>
                        <div className="w-full grid gap-6 mb-3 md:grid-cols-2">
                            <Form.Item
                                name="cellphone_number"
                                label="Cell phone number"
                                rules={[
                                    { required: true, message: 'Please enter phone number!' },
                                    { validator: validatePhoneNumber }
                                ]}
                            >
                                <Input placeholder="eg. 555-555-5555" className="block rounded-lg" />
                            </Form.Item>
                            <Form.Item
                                name="emergency_contact_number"
                                label="Emergency contact phone number"
                                rules={[
                                    { required: true, message: 'Please enter emergency contact number!' },
                                    { validator: validatePhoneNumber }
                                ]}>
                                <Input placeholder="eg. 555-555-5555" className="block rounded-lg" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="section bg-slate-100 rounded-md my-3 w-full">
                        <h1 className="text-center text-xl font-semibold tracking-wide py-5">Relevant Skills</h1>
                        <div className="w-full flex justify-center items-center">
                            <Form.Item
                                name="sport_options"
                                label="I can coach the fundamentals of: "
                                labelCol={{ style: { textAlign: 'center', paddingBottom: '1.5rem' } }}
                                className="font-medium"
                                rules={[{ required: true, message: 'Please select at least one sport!' }]}
                            >
                                <Checkbox.Group>
                                    <Row gutter={[16, 16]}>
                                        {sportOptions.map((sport: SportOptions) => (
                                            <Col key={sport.value} span={8}>
                                                <Checkbox value={sport.value} className="font-bold">{sport.label}</Checkbox>
                                            </Col>
                                        ))}
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}