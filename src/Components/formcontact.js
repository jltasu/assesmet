import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker
} from "antd";
import { EditFilled } from "@ant-design/icons";

const { Option } = Select;

class FormContact extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
      <Button type="primary" shape="round" onClick={this.showDrawer}>
      <EditFilled /> Solicitar Cita 
        </Button>
        {/* <Button type="primary"  shape="round"><PhoneFilled /> Contactar</Link></Button> */}
        <Drawer
          title="Registrar Cita"
          width={1000}
          height={1000}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80}}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'porfavor ingrese su nombre' }]}
                >
                  <Input placeholder="ingrese su nombre" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="apellidos"
                  label="Apellidos"
                  rules={[{ required: true, message: 'porfavor ingrese sus apellidos' }]}
                >
                  <Input placeholder="porfavor ingrese sus apellidos" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Input placeholder="porfavor ingrese sus apellidos" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Tipo"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Privado</Option>
                    <Option value="public">Publico</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="carrera"
                  label="carrera"
                  rules={[{ required: true, message: 'seleccionar carrera' }]}
                >
                  <Select placeholder="seleccionar carrera">
                    <Option value="jack">Ingenieria de sistemas</Option>
                    <Option value="tom">Ingenieria Ambiental</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="Fecha"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Descripción"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                 <Input rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default FormContact;