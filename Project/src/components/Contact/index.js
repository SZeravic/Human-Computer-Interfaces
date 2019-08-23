import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styles from "./styles.module.css";

export default () => {
  const data = useStaticQuery(graphql`
  query ContactQuery{
      markdownRemark(frontmatter: { slug: { eq: "Contact" } }) {
        html
        frontmatter {
          date
          slug
          title
        }
      }
    }
  `);

  // console.log(data);
  return (
    <>
      <section className={styles.Data} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
      
      <div className={styles.div_container}>
      <form>
          <label htmlFor="fname">First Name</label>
          <input  className={styles.fname}
                  id="fname"                  
                  name="firstname"
                  placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input  className={styles.lname}
                  id="lname"                  
                  name="lastname"
                  placeholder="Your last name.."
          />

          <label htmlFor="email">E-mail</label>
          <input  className={styles.email}
                  type="text"
                  id="email"                  
                  name="email"
                  placeholder="Your e-mail.."
          />

          <label>Subject</label>
          <textarea className={styles.textarea} id="subject" name="subject" placeholder="Write something.."></textarea>

          <input className={styles.submit} type="submit" value="Submit"/>
      </form>
      </div>
    </>
  );
};

// export default class ContactForm extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log(props);
//   // };

//   render() {
//     return (
//       <>

//         <h3>Contact Form</h3>

//         <div className={styles.div_container}>
//         <form>
//             <label htmlFor="fname">First Name</label>
//             <input  type="text"
//                     id="fname"
//                     name="firstname"
//                     placeholder="Your name.."
//             />

//             <label htmlFor="lname">Last Name</label>
//             <input  type="text"
//                     id="lname"
//                     name="lastname"
//                     placeholder="Your last name.."
//             />

//             <label htmlFor="country">Country</label>
//             <select id="country" name="country">
//                 <option value="australia">Australia</option>
//                 <option value="canada">Canada</option>
//                 <option value="usa">USA</option>
//             </select>

//             <label>Subject</label>
//             <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

//             <input type="submit" value="Submit"/>
//         </form>
//         </div>

//         {/* <section className={styles.Data} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/> */}
//         {/* 
//           <div className="container">
//             <form action="action_page.php">

//               <input type="text" id="fname" name="firstname" placeholder="Your name.."> Input </input>
              

//             </form>
//           </div> */}
//       </>
//     );
//   }
// };

// export const query = graphql`
// query ContactQuery{
//   markdownRemark(frontmatter: { slug: { eq: "Contact" } }) {
//     html
//     frontmatter {
//       date
//       slug
//       title
//     }
//   }
// }
// `