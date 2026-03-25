# 🍳 Cooking Guide Web App

> 🌟 Một ứng dụng web hướng dẫn nấu ăn đa vai trò, kết nối người yêu ẩm thực với các đầu bếp chuyên nghiệp, được quản lý bởi hệ thống Admin.

---

## 📌 Giới thiệu

**Cooking Guide** là một nền tảng giúp người dùng khám phá, lưu trữ và quản lý các công thức nấu ăn.  
Hệ thống hỗ trợ **3 vai trò chính**:

- 👤 User (Người dùng)
- 👨‍🍳 Chef (Đầu bếp)
- 🛡️ Admin (Quản trị viên)

---

## 👥 Roles & Features

### 😋 1. User (Người dùng)

- 🔍 **Khám phá công thức**
  - Xem danh sách và chi tiết các món ăn từ nhiều đầu bếp

- ❤️ **Yêu thích**
  - Thả tim món ăn
  - Lưu vào danh sách yêu thích

- 📚 **Bộ sưu tập (Collections)**
  - Tạo collection cá nhân (VD: *Eat Clean*, *Cuối tuần*)
  - Thêm/Xóa món ăn trong collection

---

### 👨‍🍳 2. Chef (Đầu bếp)

- 📋 **Quản lý công thức cá nhân**
  - Chỉ thấy và quản lý món do mình tạo

- 🔎 **Tìm kiếm & Lọc**
  - Tìm theo tên hoặc tag

- ✏️ **CRUD Công thức**
  - ➕ Thêm món mới:
    - Tiêu đề
    - Hình ảnh (Upload/URL)
    - Tags
    - Nguyên liệu
    - Các bước chi tiết
  - ✏️ Chỉnh sửa
  - ❌ Xóa món

- 👀 **Live Preview**
  - Xem trước UI món ăn khi đang nhập liệu

---

### 🛡️ 3. Admin (Quản trị viên)

- 📊 **Dashboard**
  - Tổng số User & Chef
  - Thống kê số công thức mỗi Chef

- 📈 **Biểu đồ tương tác**
  - Theo dõi:
    - Lượt xem
    - Lượt yêu thích
    - Collection

- 👥 **Quản lý người dùng**
  - Lọc theo role (Admin / Chef / User)
  - Tạo tài khoản mới

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|-----------|
| Frontend   | ReactJS, React Router DOM |
| State      | React Hooks (useState, useEffect, useMemo, useRef) |
| Styling    | CSS3, Bootstrap 5 |
| Backend    | JSON Server (Mock API) |

---

## 🚀 Getting Started

### 1️⃣ Setup Backend (JSON Server)

```bash
# Cài đặt json-server (nếu chưa có)
npm install -g json-server

# Chạy server
json-server --watch db.json --port 9999