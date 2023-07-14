import { Form, Input, Select, Button, DatePicker } from "antd";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import Footer from "./Footer";
// import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  let x = window.matchMedia("(max-width: 700px)");

  useEffect(() => {
    if (x.matches) {
      console.log(x.matches);
      setSidebarOpen(false);
    } else {
      console.log(x.matches);
      setSidebarOpen(true);
    }
  }, []);

  const imageVatiants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
  };
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
        <Select.Option value="95">+95</Select.Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className=" relative bg-slate-50">
      <div className="">
        {isSidebarOpen && (
          <motion.div
            variants={imageVatiants}
            initial="hidden"
            animate="visible"
            className="bg-[#EEC68C] h-full fixed top-0 left-0 w-[250px] md:w-[320px]"
          >
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </motion.div>
        )}
        <div className="h-20">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        <div
          className={` overflow-hidden ${
            isSidebarOpen && "ml-[300px]"
          }  absolute top-52 left-40 py-10`}
        >
          <div className=" absolute top-[-1%] left-[30%]">
            <h3 className=" text-2xl font-semibold text-[#EEC68C]">
              Customer Data
            </h3>
          </div>
          <div className=" w-[900px]">
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
            >
              <Form.Item
                name="username"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input customer name",
                  },
                ]}
              >
                <Input
                  placeholder="Please input customer name"
                  style={{ width: "50%" }}
                />
              </Form.Item>

              <Form.Item
                name="nickname"
                label="Room Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname",
                  },
                ]}
              >
                <Input
                  placeholder="Please input Room No"
                  style={{ width: "50%" }}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} style={{ width: "50%" }} />
              </Form.Item>

              <Form.Item name="date-time-picker" label="Check in Date and Time">
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  style={{ width: "50%" }}
                />
              </Form.Item>

              <Form.Item
                name="select"
                label="Payment Method"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <Select placeholder="Payment Type" style={{ width: "50%" }}>
                  <Select.Option value="visa">Visa</Select.Option>
                  <Select.Option value="master">Master</Select.Option>
                  <Select.Option value="paypal">Paypal</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="selects"
                label="Payment Process"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Payment state",
                  },
                ]}
              >
                <Select placeholder="Payment state" style={{ width: "50%" }}>
                  <Select.Option value="success">Success</Select.Option>
                  <Select.Option value="pending">Pending</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button
                  htmlType="submit"
                  className=" bg-[#EEC68C] ps-5 ms-12 text-white active:bg-[#ddb882] shadow"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className=" mt-[170px] ms-[10px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
