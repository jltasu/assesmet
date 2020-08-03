import React from "react";
import { List, Avatar, Progress } from 'antd';


const listData = [
  {
    href: 'https://ant.design',
    title: `Apertura a experiencias`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    description:
      'Apertura a las experiencias. Más alto: Intelectualmente curiosos, emocionalmente conscientes, sensibles a la belleza, y deseosos por probar cosas nuevas. Más bajo: Prefieren lo común, directo, y obvio, frente a lo complicado, ambiguo y sutil',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `Responsabilidad`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    description:
      'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. Más bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    title: `Extroversión`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    description:
      'Más alto: Más enérgico y marcado compromiso con el mundo externo. Les gusta la alta visibilidad en grupos, hablar y demostrarse a si mismos. Más bajo: Necesitan menos estimulación y son más independientes de su mundo social. No significa que sean tímidos, no amistosos, o antisociales.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `Amabilidad`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    description:
      'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. Más bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `Rango emocional`,
    avatar: 'https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    description:
      'Más alto: Más promensos a tener emociones negativas o disgustarse. Puede significar que estén pasando por un mañ momento. Más bajo: Más calmos y menos probables a disgustarse o alterarse. Esto no significa que sean gente positiva o feliz.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }
];

const Bubble = () => {
  return (
    <div>
      <h4>Informe de personalidad</h4>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
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
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  )
};
export default Bubble;
