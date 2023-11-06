import React from "react";

const section1ContainerStyle = {
  textAlign: "center",
  padding: "20px",
};

const section1HeaderStyle = {
  backgroundColor: "#34d123", // Green color for vegan
  color: "white",
  padding: "20px",
};

const headerStyle = {
  fontSize: "36px",
};

const section1ContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px", // Gap between articles
  marginTop: "20px",
};

const blogPostStyle = {
  flex: "1",
  backgroundColor: "#f7f7f7",
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "left",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const h2Style = {
  fontSize: "24px",
};

const pStyle = {
  fontSize: "16px",
  margin: "10px 0",
};

const readMoreLinkStyle = {
  display: "inline-block",
  color: "#34d123",
  textDecoration: "none",
  fontWeight: "600",
  marginTop: "10px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  marginBottom: "20px", // Add margin at the bottom to create gap
};

const Section1 = () => {
  return (
    <div style={section1ContainerStyle}>
      <header style={section1HeaderStyle}>
        <h1 style={headerStyle}>Delicious Vegan Food Blog</h1>
      </header>
      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vegan Italian Cuisine"
            style={imageStyle}
          />
          <h2 style={h2Style}>Exploring Vegan Italian Cuisine</h2>
          <p style={pStyle}>
            Italy is famous for its mouthwatering pasta, pizzas, and gelato.
            Discover how to enjoy these Italian classics in a vegan way.
          </p>
          <a href="#" style={readMoreLinkStyle}>
            Read More
          </a>
        </article>
        <article style={blogPostStyle}>
          <img
            src="https://media.istockphoto.com/id/594472840/photo/vegetable-on-the-table.jpg?s=1024x1024&w=is&k=20&c=apgIdmrTLscQtXvop2T_bSGV4CCIBuGptBt2A-DqKxs="
            alt="Vegan Sushi Cuisine"
            style={imageStyle}
          />
          <h2 style={h2Style}>Vegan Sushi: A Delicious Alternative</h2>
          <p style={pStyle}>
            Sushi is not just food; it's an art form. Explore how to make and
            enjoy vegan sushi rolls in this blog post.
          </p>
          <a href="#" style={readMoreLinkStyle}>
            Read More
          </a>
        </article>
        <article style={blogPostStyle}>
          <img
            src="https://media.istockphoto.com/id/1472311667/photo/fruit-salad-on-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=G8tdNg_KDMoimMUZYl7g8VeRzDdMa60pga372rpfYo0="
            alt="Vegan Desserts"
            style={imageStyle}
          />
          <h2 style={h2Style}>Indulge in Vegan Desserts</h2>
          <p style={pStyle}>
            Satisfy your sweet tooth with vegan dessert recipes that are
            cruelty-free and delicious. Explore delectable vegan treats in this post.
          </p>
          <a href="#" style={readMoreLinkStyle}>
            Read More
          </a>
        </article>
      </div>
    </div>
  );
};

export default Section1;
