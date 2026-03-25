import { useState } from "react";
import "./Login.css";

export default function Auth({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      const res = await fetch("http://localhost:9999/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          role: "USER",
        }),
      });
      if (res.ok) {
        alert("Đăng ký thành công! Hãy đăng nhập.");
        setIsRegister(false);
      }
    } else {
      const res = await fetch(
        `http://localhost:9999/users?email=${form.email}&password=${form.password}`
      );
      const data = await res.json();

      if (data.length > 0) {
        const user = data[0];
        localStorage.setItem("role", user.role);
        localStorage.setItem("userId", user.id);
        onLogin(user.role);
      } else {
        alert("Sai email hoặc mật khẩu");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h3>{isRegister ? "Đăng ký tài khoản" : "Chào mừng trở lại"}</h3>
        <p className="auth-subtitle">
          {isRegister 
            ? "Vui lòng nhập thông tin để bắt đầu" 
            : "Nhập thông tin của bạn để truy cập hệ thống"}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {isRegister && (
            <div className="form-group">
              <label>Tên hiển thị</label>
              <input
                type="text"
                name="name"
                placeholder="Nhập tên của bạn"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Địa chỉ Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            {isRegister ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </form>

        <p className="toggle-text">
          {isRegister ? "Đã có tài khoản rồi?" : "Bạn chưa có tài khoản?"}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Đăng nhập" : "Tạo tài khoản mới"}
          </button>
        </p>
      </div>
    </div>
  );
}