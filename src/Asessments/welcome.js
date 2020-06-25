import React from 'react'
import { Layout, Menu, Button, Row, Col, Divider, Card, PageHeader } from 'antd';

const { SubMenu } = Menu;
const { Header, Content } = Layout;
const { Meta } = Card;

const WelcomePage = () => {
    return (
        <Layout>
            <Menu mode="horizontal" style={{backgroundColor:'white'}}>
                <Menu.Item key="app" disabled style={{fontSize: 18}}>
                    VocacionalExplorer
                </Menu.Item>
                <Menu.Item key="mail" style={{fontSize: 18}}>
                    Mis reportes
                </Menu.Item>
                <SubMenu title="Explorar" style={{fontSize: 18}}>
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay" style={{fontSize: 18}}>
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Oportunidades </a>
                </Menu.Item>
            </Menu>

            <Layout>
                <Layout style={{ padding: '0 30px 24px', backgroundColor: '#f6f5f5' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 45,
                            margin: 0,
                            minHeight: 550,
                            backgroundColor: '#f6f5f5'
                        }}
                    >
                        <a style={{ fontSize: 48, fontWeight: 'bold' }}>Bienvenido a Vocacional Explorer</a>
                        <div>
                            <a style={{ fontSize: 20 }}>Bienvenido a Vocacional Explorer</a>
                        </div>
                        <div style={{ paddingTop: 20, paddingBottom: 40 }}>
                            <Button type="primary" style={{ width: 450, height: 60, borderRadius: 9, fontSize: 25, fontWeight: 'bold' }}>Iniciar ahora</Button>
                        </div>
                        <div>
                            <a style={{ fontSize: 20 }}>Aprenda más</a>
                        </div>
                        <Divider orientation="left">
                        </Divider>
                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Card
                                        hoverable
                                        style={{ width: 240, borderRadius: 12 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: 12 }} />}
                                    >
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card
                                        hoverable
                                        style={{ width: 240, borderRadius: 12 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: 12 }} />}
                                    >
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card
                                        hoverable
                                        style={{ width: 240, borderRadius: 12 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: 12 }} />}
                                    >

                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card
                                        hoverable
                                        style={{ width: 240, borderRadius: 12 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: 12 }} />}
                                    >

                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default WelcomePage