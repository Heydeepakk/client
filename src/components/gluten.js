import React from "react";

const section1ContainerStyle = {
  textAlign: "center",
  padding: "20px",
};

const section1HeaderStyle = {
  backgroundColor: "#ff5733",
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
  gap: "20px",
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
  margin: "10px 0", // Add margin to the top and bottom
};

const readMoreLinkStyle = {
  display: "inline-block",
  color: "#ff5733",
  textDecoration: "none",
  fontWeight: "600",
  marginTop: "10px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  marginBottom: "10px", // Add margin to the bottom
};

const Section1 = () => {
  return (
    <div style={section1ContainerStyle}>
      <header style={section1HeaderStyle}>
        <h1 style={headerStyle}>Gluten Food Blog</h1>
      </header>
      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1521146250551-a5578dcc2e64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Italian Cuisine"
            style={imageStyle}
          />
          <h2 style={h2Style}>Exploring Italian Cuisine</h2>
          <p style={pStyle}>
            Italy is famous for its mouthwatering pasta, pizzas, and gelato. In
            this blog post, we'll take you on a culinary journey through the
            heart of Italy.
          </p>
          <a href="#" style={readMoreLinkStyle}>
            Read More
          </a>
        </article>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1498654364264-5e856b6bb047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M38fGdsdXRlbiUyMGZyZWUlMjBmb29kfGVufDB8fDB8fHww"
            alt="Sushi Cuisine"
            style={imageStyle}
          />
          <h2 style={h2Style}>Sushi: The Art of Japanese Cuisine</h2>
          <p style={pStyle}>
            Sushi is not just food; it's an art form. Discover the history and
            secrets behind this Japanese delicacy in our latest blog post.
          </p>
          <a href="#" style={readMoreLinkStyle}>
            Read More
          </a>
        </article>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1443808709349-353c8b390400?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthy Eating"
            style={imageStyle}
          />
          <h2 style={h2Style}>Healthy Eating: A Balanced Diet</h2>
          <p style={pStyle}>
            Learn the importance of a balanced diet and explore some
            mouthwatering yet nutritious gluten-free recipes that you can easily prepare at home.
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
