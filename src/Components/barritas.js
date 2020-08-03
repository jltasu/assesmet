import React from "react";
import { List, Avatar, Progress, Card, Badge } from 'antd';


const data = [
  {
    href: 'https://ant.design',
    title: `Ingenieria de Sistemas`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `Administración`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }
];

const Barritas = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <h3 className="mb-4 primary">Luis, estas son las mejores opiniones según tu perfil</h3>
        <p>Si estas considerando una opcion que no aparece en la recomendacion no significa que no
        la puedes estudiar, simplemente que nosotros vemos las otras como mejores opciones.
        </p>
      </div>

      <Card title="Estas carreras coinciden con tus preferencias" style={{color: 'red'}}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <Progress type="circle" percent={30} width={80} />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
};
export default Barritas;
