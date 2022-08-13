import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import './index.scss'

const PostDetailPage = () => {
  const {isUserLogged, setIsUserLogged} = useContext(UserContext)
  const { id } = useParams()

  return (
    <Layout>
      <>
        <Hero
          img={require('../../resources/images/lawyers.jpg')}
          text={'Our Blog (should be a link can back to postpage)'}
        />

        {/* fake post */}
        <div className="blog">
          <h1>The ID of this Blog is: {id}</h1>
          <h2>Tuesday July 29, 2022</h2>
          <img src={require('../../resources/images/post1.jpg')} alt="blog1" />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed rerum harum dolorum obcaecati rem? Minima amet assumenda, laborum quisquam sit architecto ea, doloribus exercitationem, ad dolorum soluta! Vel dolorum nesciunt nihil fugiat accusantium quod, nemo iste accusamus nobis, tenetur eius. Illum, natus enim debitis alias laudantium excepturi incidunt vel. Maxime odit delectus harum modi, iusto sint autem facilis distinctio voluptatum quisquam corporis, incidunt illo ex aspernatur? Consequuntur quod voluptatem perspiciatis maxime rem dolorum molestiae, officiis, laboriosam placeat soluta esse error recusandae</p>
          <p>alias illo reiciendis provident quis repellendus dolores facilis quae est non laborum necessitatibus. Voluptatum iure nobis dicta! Non dolore, a assumenda veritatis delectus voluptatibus consectetur unde esse similique maiores enim asperiores, officiis minima eveniet quas, dolorum nihil amet? Nam, nulla neque eligendi quos incidunt dolores facilis illum molestiae, ducimus soluta impedit! Nulla amet sit, exercitationem fugit dolores odit ipsa quibusdam distinctio. Quam, iste. Laborum dolorum non neque officiis, blanditiis omnis nisi? Consequuntur assumenda reprehenderit quisquam corporis culpa accusantium nostrum! Explicabo, eveniet eius! Asperiores dignissimos dolore assumenda voluptas, porro culpa velit cum, explicabo officiis nam, et aperiam nisi! Aliquid tenetur facere esse est, dolor magni?</p>
          <p> Laudantium similique molestias asperiores accusamus explicabo voluptatem vel omnis quis? Consequatur natus quasi voluptatem non ullam tempore! Dolorum totam harum voluptatibus obcaecati eius ipsam officiis delectus eaque adipisci sed molestias animi, maxime soluta iusto doloribus minima quam quis quos asperiores tempora recusandae! Iure voluptatum repellat quis omnis unde officiis! Mollitia nihil fuga alias maxime voluptas officiis animi doloremque veniam commodi necessitatibus ut illum minus, incidunt dolorem odio ad nobis? Architecto a modi omnis illum mollitia, aliquid dolore reiciendis voluptas eos id eius nisi voluptates neque quidem quam magnam ullam molestiae hic voluptate similique. Ex sequi nesciunt assumenda? Praesentium ex tempore placeat quas quis asperiores modi accusamus minus molestiae delectus. Dolore quia explicabo rem neque incidunt, debitis eaque ad a nulla harum nemo sapiente pariatur earum? Nihil vero quo ab. Distinctio reiciendis tempora corporis quia impedit iusto, alias a neque eveniet hic cupiditate, tenetur sed nemo deserunt laboriosam commodi voluptas expedita voluptatum autem aliquid. Saepe, voluptates officia? Dignissimos eligendi itaque ipsam, adipisci ex rem obcaecati corrupti perspiciatis, temporibus corporis quos, ipsum ducimus. Minus, quam vero. Excepturi quas earum temporibus ducimus minima molestiae tenetur soluta? Ipsam placeat esse necessitatibus sint? Quae, reprehenderit quidem! Voluptate eaque possimus doloribus, cumque alias veritatis itaque velit quia animi est aliquid at corporis provident ducimus incidunt laborum repellendus fugit. Tempora voluptas veritatis aliquam ea unde dolor dicta? Harum quae magni at, dolores quibusdam neque maiores consectetur libero quidem in reiciendis. Ipsam</p>
          <p> soluta repellendus! Excepturi quaerat assumenda reprehenderit, aliquam suscipit placeat tenetur odio quidem, nemo quis ipsam corporis quas maiores eveniet provident vero voluptates eius, perferendis velit? Neque iure dignissimos temporibus aliquid soluta expedita molestiae, ipsam dolore, totam autem voluptatem eius alias, minus libero nobis enim eaque at veritatis in nostrum cupiditate fugiat ipsa. Asperiores neque veritatis ut iusto laboriosam et deserunt dolore, perspiciatis quaerat ab debitis magnam earum. Excepturi magni repellendus quisquam, sit voluptatum error, quae culpa laborum nobis dignissimos accusamus.</p>
        </div>
      </>
    </Layout>
  )
}

export default PostDetailPage
