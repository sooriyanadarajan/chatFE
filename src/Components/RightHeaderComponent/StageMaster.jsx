import React, { useEffect, useState } from "react";
import { Modal, message, Table } from "antd";
import "./StageMaster.css";
// import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { Button, Select, Form, Input, Space } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const StageMaster = () => {
  const [form] = Form.useForm();
  const [Editform] = Form.useForm();

  const [showForm, setShowForm] = useState(false);

  const [agenttype, setAgentType] = useState("");
  const [customertype, setCustomerType] = useState("");
  const [checkpoint, setCheckpoint] = useState("");
  const [complexity, setComplexity] = useState("");
  const [stagecode, setStagecode] = useState("");
  const [stagedescription, setStagedescription] = useState("");
  const [stageshortname, setStageshortname] = useState("");
  const [stagelabel, setStagelabel] = useState("");
  const [delegation, setDelegation] = useState("");
  const [productcode, setProductcode] = useState("");
  const [chatbot, setChatbot] = useState("");
  const [fetchdata, setFetchdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [id, setId] = useState("");
  
  const [editagenttype, seteditAgentType] = useState("");
  const [editcustomertype, seteditCustomerType] = useState("");
  const [editcheckpoint, seteditCheckpoint] = useState("");
  const [editcomplexity, seteditComplexity] = useState("");
  const [editstagecode, seteditStagecode] = useState("");
  const [editstagedescription, seteditStagedescription] = useState("");
  const [editstageshortname, seteditStageshortname] = useState("");
  const [editstagelabel, seteditStagelabel] = useState("");
  const [editdelegation, seteditDelegation] = useState("");
  const [editproductcode, seteditProductcode] = useState("");
  const [editchatbot, seteditChatbot] = useState("");

  const columns = [
    {
      title: "Stage Code",
      dataIndex: "stage_Code",
      key: "Stage Code",
    },
    {
      title: "Stage Label",
      dataIndex: "stage_Label",
      key: "Stage Label",
    },
    {
      title: "Short Description",
      dataIndex: "stage_Description",
      key: "Short Description",
    },
    {
      title: "Stage Short Name",
      dataIndex: "stage_Short_Name",
      key: "Stage Short Name",
    },
    {
      title: "Stage Complexity",
      dataIndex: "stage_Complexity",
      key: "Stage Complexity",
    },
    {
      title: "Delegation NonLending Power",
      dataIndex: "delegation_NonLending_Power",
      key: "Delegation NonLending Power",
    },
    {
      title: "Check Point",
      dataIndex: "check_Point",
      key: "Check Point",
    },
    {
      title: "Chatbot",
      dataIndex: "chat_Bot",
      key: "Chatbot",
    },
    {
      title: "AgentType",
      dataIndex: "agent_Type",
      key: "AgentType",
    },
    {
      title: "CustomerType",
      dataIndex: "customer_Type",
      key: "CustomerType",
    },
    {
      title: "ProductCode",
      dataIndex: "product_Code",
      key: "ProductCode",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <>
          <Button onClick={()=>modalcontent(record)}>Edit</Button>
          <Button>Delete</Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    axios
      .post("http://localhost:5027/chatbot/stage", { page: 1, limit: 10 })
      .then((res) => {
        console.log(res, "res");
        if (res.data.success === true) {
          const val = res.data.data;
          setFetchdata(val);
        } else {
          message.error("Something Wrong, Try Again !!!");
        }
      });
  }, []);

  const modalcontent = (value) => {
    setIsEditOpen(true);
    console.log(value,"console")
    setId(value._id)
    Editform.setFieldsValue({
      editstagecode: value.stage_Code,
      editstagelabel: value.stage_Label,
      editstagedescription: value.stage_Description,
      editshortname: value.stage_Short_Name,
      editproductcode:value.product_Code,
      editcutomertype: value.customer_Type,
      editcomplexity: value.stage_Complexity,
      editchatbot: value.chat_Bot,
      editagenttype: value.agent_Type,
      editdelegation: value.delegation_NonLending_Power,
      editcheckpoint: value.check_Point,

    })
    seteditStagecode(value.stage_Code)
    seteditStagelabel(value.stage_Label)
    seteditStagedescription(value.stage_Description)
    seteditStageshortname(value.stage_Short_Name)
    seteditProductcode(value.product_Code)
    seteditCustomerType(value.customer_Type)
    seteditComplexity(value.stage_Complexity)
    seteditAgentType(value.agent_Type)
    seteditChatbot(value.chat_Bot)
    seteditCheckpoint(value.check_Point)
    seteditDelegation(value.delegation_NonLending_Power)


  };
  const handleButtonClick = () => {
    setIsModalOpen(true);
    form.resetFields();
    setShowForm(!showForm);
  };

  const handleOk = () => {
    axios
      .post("http://localhost:5027/chatbot/stage/64b8c5027071f47a6f04a951", {
        stage_Code: stagecode,
        stage_Label: stagelabel,
        stage_Description: stagedescription,
        stage_Short_Name: stageshortname,
        product_Code: productcode,
        customer_Type: customertype,
        activity_id: "64abea747007ee06a107adc5",
        stage_Complexity: complexity,
        chat_Bot: chatbot,
        agent_Type: agenttype,
        delegation_NonLending_Power: delegation,
        check_Point: checkpoint,
      })
      .then((res) => {
        console.log(res, "res");
        if (res.data.success === true) {
          message.success("Stage Created Successfully");
          setIsModalOpen(false);
          form.resetFields();
        } else {
          message.error("Something Wrong, Try Again !!!");
        }
      });
    // setIsModalOpen(false);
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:5027/chatbot/stage/64b8c5027071f47a6f04a951", {
        id: id,
        stage_Code: editstagecode,
        stage_Label: editstagelabel,
        stage_Description: editstagedescription,
        stage_Short_Name: editstageshortname,
        product_Code: editproductcode,
        customer_Type: editcustomertype,
        stage_Complexity: editcomplexity,
        chat_Bot: editchatbot,
        agent_Type: editagenttype,
        delegation_NonLending_Power: editdelegation,
        check_Point: editcheckpoint,
      })
      .then((res) => {
        console.log(res, "res");
        if (res.data.success === true) {
          message.success("Stage Updated Successfully");
          setIsEditOpen(false);
        } else {
          setIsEditOpen(false);
          message.error("Something Wrong, Try Again !!!");
        }
      });
  };

  const stageactivelist = () => {
    setLoading(true);
    axios
      .post("http://localhost:5027/chatbot/stage", {
        page: 1,
        limit: 10,
        active: true,
      })
      .then((res) => {
        console.log(res, "res");
        if (res.data.success === true) {
          const val = res.data.data;
          setLoading(false);
          setFetchdata(val);
          message.success("Stage Listed Successfully");
          setIsModalOpen(false);
          form.resetFields();
        } else {
          setLoading(false);
          message.error("Something Wrong, Try Again !!!");
        }
      });
  };

  const stageinactivelist = () => {
    setLoading(true);
    axios
      .post("http://localhost:5027/chatbot/stage", {
        page: 1,
        limit: 10,
        inactive: true,
      })
      .then((res) => {
        console.log(res, "res");
        if (res.data.success === true) {
          const val = res.data.data;
          setFetchdata(val);
          message.success("Stage Listed Successfully");
          setLoading(false);
        } else {
          setLoading(false);
          message.error("Something Wrong, Try Again !!!");
        }
      });
  };
  const stagedraftlist = () => {
    setLoading(true);
    axios
      .post("http://localhost:5027/chatbot/stage", {
        page: 1,
        limit: 10,
        draft: true,
      })
      .then((res) => {
        console.log(res, "res");
        if (res.data.success === true) {
          const val = res.data.data;
          setLoading(false);
          setFetchdata(val);
          message.success("Stage Listed Successfully");
          setIsModalOpen(false);
          form.resetFields();
        } else {
          setLoading(false);

          message.error("Something Wrong, Try Again !!!");
        }
      });
  };
  const handlecancel = () => {
    setIsModalOpen(false);
    setIsEditOpen(false)
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div>
        <Modal
          maskClosable={false}
          open={isModalOpen}
          okText="Create"
          onOk={handleOk}
          onCancel={handlecancel}
          width={"55%"}
        >
          <Form
            form={form}
            className="form"
            name="basic"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              // label="Username"
              name="Stage Code"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Code be Unique!",
                },
              ]}
            >
              <Input
                placeholder="Stage Code"
                onChange={(e) => setStagecode(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Stage Label"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Label as Valid!",
                },
              ]}
            >
              <Input
                placeholder="Stage Label"
                onChange={(e) => setStagelabel(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Stage Description"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Description!",
                },
              ]}
            >
              <Input
                placeholder="Stage Description"
                onChange={(e) => setStagedescription(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Stage Short Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Short Name!",
                },
              ]}
            >
              <Input
                placeholder="Stage Short Name"
                onChange={(e) => setStageshortname(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Product Code"
              rules={[
                {
                  required: true,
                  message: "Select input your Product Code!",
                },
              ]}
            >
              <Select
                placeholder="Product Code"
                className="form-inuput"
                options={[
                  {
                    label: "SBI Regular Home Loan",
                    value: "SBI Regular Home Loan",
                  },
                  {
                    label: "SBI Regular  Car Loan",
                    value: "SBI Regular  Car Loan",
                  },
                  {
                    label: "SBI Regular Personal Loan",
                    value: "SBI Regular Personal Loan",
                  },
                ]}
                onChange={(value) => setProductcode(value)}
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Customer Type"
              rules={[
                {
                  required: true,
                  message: "Select input your Customer Type!",
                },
              ]}
            >
              <Select
                placeholder="Customer Type"
                className="form-inuput"
                options={[
                  {
                    label: "Standard",
                    value: "Standard",
                  },
                  {
                    label: "Premium",
                    value: "Premium",
                  },
                ]}
                onChange={(value) => setCustomerType(value)}
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Stage Complexity"
              rules={[
                {
                  required: true,
                  message: "Select input your Stage Complexity!",
                },
              ]}
            >
              <Select
                placeholder="Stage Complexity"
                className="form-inuput"
                options={[
                  {
                    label: "Low",
                    value: "Low",
                  },
                  {
                    label: "Medium",
                    value: "Medium",
                  },
                  {
                    label: "High",
                    value: "High",
                  },
                ]}
                onChange={(value) => setComplexity(value)}
              />{" "}
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Chat Bot"
            >
              <Input
                placeholder="Chat Bot"
                onChange={(e) => setChatbot(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Agent Type"
              rules={[
                {
                  required: true,
                  message: "Select input your Agent Type!",
                },
              ]}
            >
              <Select
                placeholder="Agent Type"
                className="form-inuput"
                options={[
                  {
                    label: "Expert",
                    value: "Expert",
                  },
                  {
                    label: "Specialist",
                    value: "Specialist",
                  },
                  {
                    label: "Standard",
                    value: "Standard",
                  },
                ]}
                onChange={(value) => setAgentType(value)}
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Delegation Non Lending Power"
              rules={[
                {
                  required: true,
                  message: "Select input your Delegation Non Lending Power!",
                },
              ]}
            >
              <Input
                placeholder="Delegation Non Lending Power"
                onChange={(e) => setDelegation(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="Check Point"
              rules={[
                {
                  required: true,
                  message: "Select input your Check Point!",
                },
              ]}
            >
              <Select
                placeholder="Check Point"
                className="form-inuput"
                options={[
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
                onChange={(value) => setCheckpoint(value)}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          maskClosable={false}
          open={isEditOpen}
          okText="Update"
          onOk={handleUpdate}
          onCancel={handlecancel}
          width={"55%"}
        >
          <Form
            form={Editform}
            className="form"
            name="basic"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              // label="Username"
              name="editstagecode"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Code be Unique!",
                },
              ]}
            >
              <Input
                placeholder="Stage Code"
                onChange={(e) => seteditStagecode(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editstagelabel"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Label as Valid!",
                },
              ]}
            >
              <Input
                placeholder="Stage Label"
                onChange={(e) => seteditStagelabel(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editstagedescription"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Description!",
                },
              ]}
            >
              <Input
                placeholder="Stage Description"
                onChange={(e) => seteditStagedescription(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editshortname"
              rules={[
                {
                  required: true,
                  message: "Please input your Stage Short Name!",
                },
              ]}
            >
              <Input
                placeholder="Stage Short Name"
                onChange={(e) => seteditStageshortname(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editproductcode"
              rules={[
                {
                  required: true,
                  message: "Select input your Product Code!",
                },
              ]}
            >
              <Select
                placeholder="Product Code"
                className="form-inuput"
                options={[
                  {
                    label: "SBI Regular Home Loan",
                    value: "SBI Regular Home Loan",
                  },
                  {
                    label: "SBI Regular  Car Loan",
                    value: "SBI Regular  Car Loan",
                  },
                  {
                    label: "SBI Regular Personal Loan",
                    value: "SBI Regular Personal Loan",
                  },
                ]}
                onChange={(value) => seteditProductcode(value)}
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editcutomertype"
              rules={[
                {
                  required: true,
                  message: "Select input your Customer Type!",
                },
              ]}
            >
              <Select
                placeholder="Customer Type"
                className="form-inuput"
                options={[
                  {
                    label: "Standard",
                    value: "Standard",
                  },
                  {
                    label: "Premium",
                    value: "Premium",
                  },
                ]}
                onChange={(value) => seteditCustomerType(value)}
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editcomplexity"
              rules={[
                {
                  required: true,
                  message: "Select input your Stage Complexity!",
                },
              ]}
            >
              <Select
                placeholder="Stage Complexity"
                className="form-inuput"
                options={[
                  {
                    label: "Low",
                    value: "Low",
                  },
                  {
                    label: "Medium",
                    value: "Medium",
                  },
                  {
                    label: "High",
                    value: "High",
                  },
                ]}
                onChange={(value) => seteditComplexity(value)}
              />{" "}
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editchatbot"
            >
              <Input
                placeholder="Chat Bot"
                onChange={(e) => seteditChatbot(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editagenttype"
              rules={[
                {
                  required: true,
                  message: "Select input your Agent Type!",
                },
              ]}
            >
              <Select
                placeholder="Agent Type"
                className="form-inuput"
                options={[
                  {
                    label: "Expert",
                    value: "Expert",
                  },
                  {
                    label: "Specialist",
                    value: "Specialist",
                  },
                  {
                    label: "Standard",
                    value: "Standard",
                  },
                ]}
                onChange={(value) => seteditAgentType(value)}
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editdelegation"
              rules={[
                {
                  required: true,
                  message: "Select input your Delegation Non Lending Power!",
                },
              ]}
            >
              <Input
                placeholder="Delegation Non Lending Power"
                onChange={(e) => seteditDelegation(e.target.value)}
                className="form-inuput"
              />
            </Form.Item>

            <Form.Item
              // label="Username"
              name="editcheckpoint"
              rules={[
                {
                  required: true,
                  message: "Select input your Check Point!",
                },
              ]}
            >
              <Select
                placeholder="Check Point"
                className="form-inuput"
                options={[
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
                onChange={(value) => seteditCheckpoint(value)}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <section className="stageMaster">
        <article>
          <div className="buttonBlock">
            <div>
              <Button
                type="button"
                className="buttonClass"
                icon={<PlusCircleFilled />}
                onClick={handleButtonClick}
              >
                {" "}
                ADD STAGE{" "}
              </Button>
            </div>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={stageactivelist}
            >
              ACTIVE
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={stageinactivelist}
            >
              INACTIVE
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={stagedraftlist}
            >
              DRAFT
            </button>
          </div>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </article>
      </section>{" "}
      <div className="table-scroll">
        <Table loading={loading} dataSource={fetchdata} columns={columns} />;
      </div>
    </>
  );
};

export default StageMaster;
