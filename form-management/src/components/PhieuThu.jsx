import { useState } from "react";
import { exportToPDF } from "../utils/pdfExport";
import logoImg from "../assets/logo.png";

function PhieuThu() {
  const [formData, setFormData] = useState({
    hoTenDonVi: "",
    diaChiDonVi: "",
    quyenSo: "",
    so: "",
    ngay: "",
    thang: "",
    nam: "",
    nguoiNop: "",
    diaChiNguoiNop: "",
    lyDoNop: "",
    soTien: "",
    soTienChu: "",
    kemTheo: "",
    ngayChungTu: "",
    thangChungTu: "",
    namChungTu: "",
    soTienChuCuoi: "",
    tieuDePhu: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleExport = () => {
    exportToPDF("phieu-thu-form", "Phieu_Thu");
  };

  return (
    <div className="form-container">
      <div id="phieu-thu-form">
        <div className="form-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                src={logoImg}
                alt="Logo"
                style={{
                  maxWidth: "100px",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  letterSpacing: "0.5px",
                }}
              >
                CLB CẤP CỨU NGOẠI VIỆN - PMC
              </h3>
            </div>

            <div
              style={{
                textAlign: "right",
                fontSize: "13px",
              }}
            >
              <span>
                Ngày
                <input
                  type="text"
                  name="ngay"
                  value={formData.ngay}
                  onChange={handleChange}
                  style={{ width: "40px", margin: "0 5px" }}
                />
                tháng
                <input
                  type="text"
                  name="thang"
                  value={formData.thang}
                  onChange={handleChange}
                  style={{ width: "40px", margin: "0 5px" }}
                />
                năm
                <input
                  type="text"
                  name="nam"
                  value={formData.nam}
                  onChange={handleChange}
                  style={{ width: "60px", margin: "0 5px" }}
                />
              </span>
            </div>
          </div>

          <h2
            style={{
              fontSize: "24px",
              margin: "1.5rem 0 0.5rem 0",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            PHIẾU THU
          </h2>

          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <textarea
              name="tieuDePhu"
              value={formData.tieuDePhu}
              onChange={handleChange}
              placeholder="Nhập tiêu đề phụ (nếu có)"
              rows="1"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                border: "none",
                borderBottom: "2px solid #ddd",
                background: "transparent",
                padding: "0.5rem",
                width: "80%",
                maxWidth: "600px",
                resize: "none",
                overflow: "hidden",
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
          </div>
        </div>

        <div className="form-section">
          <p style={{ fontSize: "13px", marginBottom: "10px" }}>
            - Họ và tên người thu tiền:
            <input
              type="text"
              name="nguoiNop"
              value={formData.nguoiNop}
              onChange={handleChange}
              style={{ width: "calc(100% - 200px)", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "10px" }}>
            - SĐT:
            <input
              type="text"
              name="diaChiNguoiNop"
              value={formData.diaChiNguoiNop}
              onChange={handleChange}
              style={{ width: "calc(100% - 100px)", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "10px" }}>
            - Lý do nộp:
            <input
              type="text"
              name="lyDoNop"
              value={formData.lyDoNop}
              onChange={handleChange}
              style={{ width: "calc(100% - 100px)", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "10px" }}>
            - Số tiền:
            <input
              type="text"
              name="soTien"
              value={formData.soTien}
              onChange={handleChange}
              style={{ width: "300px", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "5px" }}>
            - Số tiền (Viết bằng chữ):
          </p>
          <textarea
            name="soTienChu"
            value={formData.soTienChu}
            onChange={handleChange}
            rows="2"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px dotted black",
              background: "transparent",
              resize: "vertical",
              minHeight: "50px",
              fontSize: "0.95rem",
              lineHeight: "1.4",
            }}
          />
        </div>

        <div className="signature-section">
          <div className="signature-box">
            <h4>NGƯỜI LẬP BIỂU</h4>
            <p>(Ký, họ tên)</p>
            <input
              type="text"
              placeholder="Nhập họ tên"
              style={{
                width: "100%",
                marginTop: "60px",
                padding: "0.3rem",
                border: "none",
                borderBottom: "1px solid black",
                textAlign: "center",
                background: "transparent",
                fontSize: "0.9rem",
              }}
            />
          </div>
          <div className="signature-box">
            <h4>THỦ QUỸ</h4>
            <p>(Ký, họ tên)</p>
            <input
              type="text"
              placeholder="Nhập họ tên"
              style={{
                width: "100%",
                marginTop: "60px",
                padding: "0.3rem",
                border: "none",
                borderBottom: "1px solid black",
                textAlign: "center",
                background: "transparent",
                fontSize: "0.9rem",
              }}
            />
          </div>
        </div>
      </div>

      <div className="export-section">
        <button className="btn btn-primary" onClick={handleExport}>
          📥 Tải xuống PDF
        </button>
      </div>
    </div>
  );
}

export default PhieuThu;
