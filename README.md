🍳 Cooking Guide Project (Tên Project của bạn)
Một ứng dụng web hướng dẫn nấu ăn đa vai trò, kết nối người yêu ẩm thực (User) với các đầu bếp chuyên nghiệp (Chef) dưới sự quản lý của Quản trị viên (Admin).

👥 Vai trò và Tính năng (Roles & Features)
Dự án được phân chia thành 3 quyền truy cập chính:

1. 😋 Người dùng (User)
Khám phá: Xem danh sách và chi tiết các công thức nấu ăn từ nhiều đầu bếp khác nhau.

Yêu thích: "Thả tim" các món ăn yêu thích và lưu trữ chúng trong một danh sách riêng.

Bộ sưu tập (Collections): * Tạo các bộ sưu tập cá nhân theo tên tùy chọn (vd: "Món ăn cuối tuần", "Đồ ăn Eat Clean").

Thêm/Xóa các công thức nấu ăn vào bộ sưu tập đã tạo.

2. 👨‍🍳 Đầu bếp (Chef)
Quản lý công thức: Chỉ xem và quản lý những món ăn do chính mình tạo ra.

Tìm kiếm & Lọc: Tìm kiếm nhanh công thức cá nhân theo tên hoặc thẻ (tags).

CRUD Công thức:

Thêm món mới: Hỗ trợ nhập liệu trực quan với tiêu đề, hình ảnh (upload/URL), thẻ tag, danh sách nguyên liệu và các bước thực hiện chi tiết.

Sửa/Xóa: Cập nhật hoặc gỡ bỏ các món ăn đã đăng.

Live Preview: Xem trước giao diện thẻ món ăn ngay trong quá trình nhập liệu.

3. 🛡️ Quản trị viên (Admin)
Bảng điều khiển (Dashboard):

Thống kê tổng số lượng User và Chef trên hệ thống.

Thống kê hiệu suất: Mỗi Chef đã đóng góp bao nhiêu công thức.

Biểu đồ tương tác: Theo dõi hành vi người dùng (Xem đơn thuần vs. Tương tác yêu thích/Tạo bộ sưu tập).

Quản lý người dùng: * Lọc danh sách người dùng theo vai trò (Admin, Chef, User).

Cấp tài khoản mới cho bất kỳ vai trò nào.

🛠 Công nghệ sử dụng (Tech Stack)
Frontend: ReactJS, React Router Dom.

State Management: React Hooks (useState, useEffect, useMemo, useRef).

Styling: CSS3, Bootstrap 5 (hoặc các thư viện hỗ trợ UI khác bạn đang dùng).

Backend (Giả lập): JSON Server (đang chạy tại port 9999).

🚀 Hướng dẫn cài đặt (Getting Started)
Để chạy dự án này ở môi trường local, hãy làm theo các bước sau:

1. Cài đặt Backend (JSON Server)
Nếu bạn chưa có, hãy đảm bảo dữ liệu db.json đã sẵn sàng và chạy server:

Bash
# Cài đặt json-server nếu chưa có
npm install -g json-server

# Chạy server (đảm bảo port 9999)
json-server --watch db.json --port 9999
2. Cài đặt Frontend
Mở một terminal mới tại thư mục dự án React:

Bash
# Cài đặt các dependencies
npm install

# Khởi chạy ứng dụng
npm start
Ứng dụng sẽ tự động mở tại: http://localhost:3000