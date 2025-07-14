# Content-Mangement-System

Company Website with CMS Integration

This project is built for a client to deliver a **pixel-perfect, responsive landing page** with a **Content Management System (CMS)** that dynamically controls the main heading of the landing page. The dynamic heading is stored in a database and managed via APIs.

---


Link : https://creative-baklava-0f4e82.netlify.app/

## 📌 Features

- 🌐 **Landing Page**: Pixel-perfect as per the provided Figma design. Only the main heading is dynamic, everything else is static.
- ✍️ **CMS Page**: Allows content managers to edit the main heading dynamically.
- ⚙️ **REST API**:
  - `POST /api/heading` – Save heading from CMS to DB
  - `GET /api/heading` – Fetch dynamic heading for landing page
- 💾 **Database Integration**: Stores the dynamic heading in a backend DB table.
- 📱 **Responsive Design**: Works across all screen sizes and devices.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML, CSS (or Tailwind/Bootstrap)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / PostgreSQL / MySQL (any based on your choice)
- **API Tool**: Postman (for testing)
- **Version Control**: Git, GitHub
