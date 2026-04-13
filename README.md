# Blog Listing Page – NextJS & Tailwind CSS

> **Thực hành 1** | Môn: Thực hành Lập trình Web | Nhóm 2

---

## Thông tin sinh viên

| Thông tin | Chi tiết |
|---|---|
| **Họ và tên** | `Nguyễn Đông Din` |
| **Mã số sinh viên** | `N23DCCN146` |
| **Lớp** | Nhóm 2 |
| **Bài thực hành** | Thực hành 1 – Blog Listing Page |

---

## Mô tả dự án

Ứng dụng web hiển thị danh sách bài viết blog được xây dựng bằng **NextJS 14 (App Router)** và **Tailwind CSS**. Dữ liệu bài viết được lấy từ REST API công khai [JSONPlaceholder](https://jsonplaceholder.typicode.com).

### Tính năng chính
- Hiển thị danh sách 12 bài viết dạng lưới (Grid Layout)
- Giao diện **Responsive** — hỗ trợ Mobile, Tablet, Desktop
- Trang chi tiết bài viết theo dynamic route `/blog/[id]`
- Fetch dữ liệu phía Server (Server Component)
- Component: `Header`, `BlogCard`, `Badge`

---

## Cấu trúc thư mục

```
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Trang danh sách bài viết (/)
│   ├── globals.css         # Tailwind base styles
│   └── blog/
│       └── [id]/
│           └── page.js     # Trang chi tiết bài viết (/blog/[id])
├── components/
│   ├── Header.js           # Component Header chung
│   ├── BlogCard.js         # Card hiển thị 1 bài viết
│   └── Badge.js            # Badge/tag tái sử dụng
├── public/
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## Hướng dẫn chạy dự án

### Yêu cầu
- Node.js >= 18.x
- npm hoặc yarn

### Các bước thực hiện

**1. Clone repository**
```bash
git clone https://github.com/din1209-nguyen/N23DCCN146_NguyenDongDin_Web_Prac1.git
cd N23DCCN146_NguyenDongDin_Web_Prac1/my-app
```

**2. Cài đặt dependencies**
```bash
npm install
```

**3. Chạy development server**
```bash
npm run dev
```

**4. Mở trình duyệt**
```
http://localhost:3000
```

---

## API sử dụng

| Endpoint | Mô tả |
|---|---|
| `GET /posts` | Lấy danh sách tất cả bài viết |
| `GET /posts/:id` | Lấy chi tiết 1 bài viết theo ID |

Base URL: `https://jsonplaceholder.typicode.com`

---

## Tiêu chí hoàn thành

- [x] Khởi tạo dự án NextJS với App Router
- [x] Kết nối GitHub, đẩy code lên Public Repository
- [x] Xây dựng Header component
- [x] Xây dựng Badge component tái sử dụng
- [x] Xây dựng BlogCard component
- [x] Fetch dữ liệu từ JSONPlaceholder API
- [x] Hiển thị danh sách bài viết dạng Grid (Responsive)
- [x] Trang chi tiết bài viết `/blog/[id]`
- [x] Nút "Back to Blog" trên trang chi tiết
- [x] Giao diện responsive (Mobile / Tablet / Desktop)
