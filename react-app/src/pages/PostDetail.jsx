import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../Components/PostAuthor'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
           <PostAuthor/>
           <div className="post-detail__buttons">
             <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
             <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
           </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt='' />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum temporibus quisquam minima. Omnis repellendus, ea, dolorem sit veniam in nostrum delectus voluptates error doloribus quis. A, tenetur veritatis. Quidem sequi iusto tenetur labore ex voluptatibus adipisci sunt, cupiditate ad ipsa nam doloremque, dolore cumque porro, esse debitis nemo qui.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at explicabo iure in ea quisquam sit eaque maxime, a dolores id voluptatibus quo necessitatibus. Quasi cum sunt atque a facere!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla quibusdam magnam temporibus, quaerat nostrum ea explicabo quidem deserunt, pariatur esse maxime tempore deleniti delectus itaque sed ex dolorem veritatis! Ipsa consequuntur at, tempora aut perspiciatis repellendus ratione libero velit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quis nam quam molestiae eum animi ipsum, tempora recusandae sunt, autem deleniti earum nesciunt voluptas alias odio, odit sapiente. Temporibus sequi vero repudiandae similique accusantium amet, magni, quos minus blanditiis quasi, suscipit ipsum sit quas voluptatibus in? Amet similique placeat ipsum doloremque voluptate rem. Itaque commodi veniam deleniti. Itaque, odio eaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum nihil tempora? Culpa, nihil mollitia accusamus ipsa quasi quae nostrum, consequatur nemo, perspiciatis quo veniam neque illo fugit reprehenderit. Natus amet, nam enim et voluptatem at, dolores odit debitis voluptate consectetur iure est veniam? Cum a facilis distinctio alias harum tempore temporibus adipisci minima corporis obcaecati eligendi pariatur quae explicabo rem iste minus, quia aliquid nisi iusto, dolorum repellendus assumenda sapiente fugit odio! Sapiente possimus sequi asperiores doloremque, natus voluptates blanditiis vel similique incidunt consequuntur odit ratione maiores eveniet optio, vero rerum culpa cum quidem autem dolorum, earum quo praesentium officiis fugit! Consequuntur error cum necessitatibus veniam excepturi nulla. Fuga magni vitae quia suscipit aliquid nobis voluptatibus sapiente obcaecati vero expedita totam ut hic, qui, ipsum quaerat officia asperiores reiciendis eligendi quam cumque alias porro voluptates quod! Neque eaque cupiditate, nemo minus mollitia eius assumenda maxime, odit harum, in accusamus. Minus, laborum ex. Facere repudiandae delectus deserunt nesciunt quis. Repudiandae nam alias error accusantium quos quod omnis eveniet dolore, deleniti similique incidunt nemo non eum aut, magnam dolorum ipsa. Saepe veritatis enim placeat, non officiis atque sequi. Similique veritatis odit repellat omnis corrupti nostrum quas vero, quos a? Corporis, perferendis.
        </p>
      </div>
    </section>
  )
}

export default PostDetail