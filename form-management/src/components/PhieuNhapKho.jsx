import { useState } from "react";
import { exportToPDF } from "../utils/pdfExport";
import logoImg from "../assets/logo.png";

function PhieuNhapKho() {
  const [formData, setFormData] = useState({
    ngay: "",
    thang: "",
    nam: "",
    so: "",
    nguoiGiao: "",
    lyDo: "",
    sdt: "",
    theoSo: "",
    ngayThang: "",
    diaDiemNhap: "",
    tongSoTien: "",
    soChungTu: "",
    soTienChuCuoi: "",
    tieuDePhu: "",
    tongYeuCau: "",
    tongThucNhap: "",
    tongDonGia: "",
    tongThanhTien: "",
  });

  const [items, setItems] = useState([
    {
      stt: "",
      tenNhanHieu: "",
      donViTinh: "",
      yeuCau: "",
      thucNhap: "",
      donGia: "",
      thanhTien: "",
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;

    // Auto calculate thành tiền (skip first row which is header)
    if (index > 0 && (field === "thucNhap" || field === "donGia")) {
      const thucNhap = parseFloat(newItems[index].thucNhap) || 0;
      const donGia = parseFloat(newItems[index].donGia) || 0;
      newItems[index].thanhTien = (thucNhap * donGia).toString();
    }

    setItems(newItems);
  };

  const addRow = () => {
    setItems([
      ...items,
      {
        stt: "",
        tenNhanHieu: "",
        donViTinh: "",
        theoChungTu: "",
        thucNhap: "",
        donGia: "",
        thanhTien: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (items.length > 2 && index > 0) {
      // Keep at least header row + 1 data row
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    }
  };

  const handleExport = () => {
    exportToPDF("phieu-nhap-kho-form", "Phieu_Nhap_Kho");
  };

  return (
    <div className="form-container">
      <div id="phieu-nhap-kho-form">
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
              <p style={{ margin: "5px 0" }}>
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
              </p>
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
            PHIẾU NHẬP KHO
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
          <p style={{ fontSize: "13px", marginBottom: "8px" }}>
            - Họ và tên người nhập kho:
            <input
              type="text"
              name="nguoiGiao"
              value={formData.nguoiGiao}
              onChange={handleChange}
              style={{ width: "calc(100% - 230px)", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "8px" }}>
            - Lý do:
            <input
              type="text"
              name="lyDo"
              value={formData.lyDo}
              onChange={handleChange}
              style={{ width: "calc(100% - 100px)", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "8px" }}>
            - SĐT:
            <input
              type="text"
              name="sdt"
              value={formData.sdt}
              onChange={handleChange}
              style={{ width: "calc(100% - 100px)", marginLeft: "5px" }}
            />
          </p>

          <p style={{ fontSize: "13px", marginBottom: "15px" }}>
            - Địa điểm nhập kho:
            <input
              type="text"
              name="diaDiemNhap"
              value={formData.diaDiemNhap}
              onChange={handleChange}
              style={{ width: "calc(100% - 180px)", marginLeft: "5px" }}
            />
          </p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th rowSpan="2" style={{ width: "40px" }}>
                  STT
                </th>
                <th rowSpan="2" style={{ minWidth: "150px" }}>
                  Tên, nhãn hiệu, quy cách, phẩm chất vật liệu, dụng cụ, sản
                  phẩm, hàng hoá
                </th>
                <th rowSpan="2" style={{ width: "70px" }}>
                  Đơn vị tính
                </th>
                <th colSpan="2">Số lượng</th>
                <th rowSpan="2" style={{ width: "80px" }}>
                  Đơn giá
                </th>
                <th rowSpan="2" style={{ width: "90px" }}>
                  Thành tiền
                </th>
                <th rowSpan="2" style={{ width: "70px" }}>
                  Xóa
                </th>
              </tr>
              <tr>
                <th style={{ width: "70px" }}>Theo chứng từ</th>
                <th style={{ width: "70px" }}>Thực nhập</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <textarea
                      value={item.stt}
                      onChange={(e) =>
                        handleItemChange(index, "stt", e.target.value)
                      }
                      rows="1"
                      style={{ textAlign: "center", resize: "vertical" }}
                    />
                  </td>
                  <td>
                    <textarea
                      value={item.tenNhanHieu}
                      onChange={(e) =>
                        handleItemChange(index, "tenNhanHieu", e.target.value)
                      }
                      rows="2"
                      style={{ textAlign: "left" }}
                    />
                  </td>

                  <td>
                    <textarea
                      value={item.donViTinh}
                      onChange={(e) =>
                        handleItemChange(index, "donViTinh", e.target.value)
                      }
                      rows="1"
                      style={{ textAlign: "center", resize: "vertical" }}
                    />
                  </td>
                  <td>
                    <textarea
                      value={item.theoChungTu}
                      onChange={(e) =>
                        handleItemChange(index, "theoChungTu", e.target.value)
                      }
                      rows="1"
                      style={{ textAlign: "center", resize: "vertical" }}
                    />
                  </td>
                  <td>
                    <textarea
                      value={item.thucNhap}
                      onChange={(e) =>
                        handleItemChange(index, "thucNhap", e.target.value)
                      }
                      rows="1"
                      style={{ textAlign: "center", resize: "vertical" }}
                    />
                  </td>
                  <td>
                    <textarea
                      value={item.donGia}
                      onChange={(e) =>
                        handleItemChange(index, "donGia", e.target.value)
                      }
                      rows="1"
                      style={{ textAlign: "center", resize: "vertical" }}
                    />
                  </td>
                  <td>
                    <textarea
                      value={item.thanhTien}
                      onChange={(e) =>
                        handleItemChange(index, "thanhTien", e.target.value)
                      }
                      rows="1"
                      style={{ textAlign: "center", resize: "vertical" }}
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button
                        className="btn btn-danger"
                        onClick={() => removeRow(index)}
                      >
                        Xóa
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="3"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Cộng
                </td>
                <td>
                  <input
                    type="text"
                    name="tongYeuCau"
                    value={formData.tongYeuCau}
                    onChange={handleChange}
                    style={{ width: "100%", textAlign: "center" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="tongThucNhap"
                    value={formData.tongThucNhap}
                    onChange={handleChange}
                    style={{ width: "100%", textAlign: "center" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="tongDonGia"
                    value={formData.tongDonGia}
                    onChange={handleChange}
                    style={{ width: "100%", textAlign: "center" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="tongThanhTien"
                    value={formData.tongThanhTien}
                    onChange={handleChange}
                    style={{ width: "100%", textAlign: "center" }}
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-actions">
          <button className="btn btn-secondary" onClick={addRow}>
            ➕ Thêm dòng
          </button>
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
            <h4>THỦ KHO</h4>
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

export default PhieuNhapKho;
