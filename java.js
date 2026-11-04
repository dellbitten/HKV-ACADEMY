// ================== CHỈNH THÔNG TIN TẠI ĐÂY ==================
const clanInfo = {
  name: "HKV ACADEMY",
  leader: "LOKI",
  server: "Việt Nam",
  founded: "05/09/2026",
  memberCount: 21,
  level: 5
};

// TOP DANH DỰ: sửa tên, chức vụ và điểm tại đây
const honorMembers = [
  { name: "THÀNH VIÊN 01", title: "Thành viên xuất sắc", score: "10.000 điểm" },
  { name: "THÀNH VIÊN 02", title: "Cống hiến nổi bật", score: "8.500 điểm" },
  { name: "THÀNH VIÊN 03", title: "Chiến binh tiêu biểu", score: "7.800 điểm" }
];

// TOP QĐC: ban quản lý quân đoàn
const commanders = [
  { name: "loki", role: "QUÂN ĐOÀN CHỦ" },
  { name: "Wind", role: "QUÂN ĐOÀN PHÓ" },
  { name: "còn Trống", role: "QUẢN LÝ" }
];

// TOP THÀNH VIÊN
const members = [
  { name: "HKV ACADEMY", role: "Thành viên", points: 10000 },
  { name: "THÀNH VIÊN 02", role: "Thành viên", points: 8500 },
  { name: "THÀNH VIÊN 03", role: "Thành viên", points: 7800 },
  { name: "THÀNH VIÊN 04", role: "Thành viên", points: 7200 },
  { name: "THÀNH VIÊN 05", role: "Thành viên", points: 6500 },
  { name: "THÀNH VIÊN 06", role: "Thành viên", points: 5900 }
];

// LUẬT QUÂN ĐOÀN
const rules = [
  ["Tôn trọng lẫn nhau", "Không xúc phạm, gây war hoặc có hành vi thiếu văn minh với thành viên khác."],
  ["Hoạt động thường xuyên", "Tham gia hoạt động quân đoàn và thông báo với quản lý nếu vắng mặt dài ngày."],
  ["Đoàn kết hỗ trợ", "Ưu tiên tinh thần đồng đội, hỗ trợ thành viên mới và phối hợp khi tham gia hoạt động."],
  ["Không gian lận", "Không sử dụng phần mềm trái phép, hack/cheat hoặc hành vi gây ảnh hưởng uy tín quân đoàn."],
  ["Tuân thủ quản lý", "Tôn trọng quyết định hợp lý của chủ quân đoàn và ban quản lý."],
  ["Giữ hình ảnh quân đoàn", "Không phát tán thông tin nội bộ hoặc đại diện quân đoàn phát ngôn thiếu trách nhiệm."]
];

// ================== HIỂN THỊ WEBSITE ==================
const $ = (id) => document.getElementById(id);
const initials = (name) => name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();

$("clanName").textContent = clanInfo.name;
$("clanLeader").textContent = clanInfo.leader;
$("clanServer").textContent = clanInfo.server;
$("clanDate").textContent = clanInfo.founded;
$("statMembers").textContent = clanInfo.memberCount;
$("statLevel").textContent = clanInfo.level;
$("year").textContent = new Date().getFullYear();
document.title = clanInfo.name + " | Trang chủ";

$("honorList").innerHTML = honorMembers.map((m, i) => `
  <article class="honor-card">
    <div class="rank">✦ TOP ${i + 1} ✦</div>
    <div class="avatar">${initials(m.name)}</div>
    <h3>${m.name}</h3><p>${m.title}</p>
    <div class="score">${m.score}</div>
  </article>`).join("");

$("leaderList").innerHTML = commanders.map((m, i) => `
  <article class="leader-card">
    <div class="avatar">${initials(m.name)}</div>
    <div><h3>${m.name}</h3><div class="role">${m.role}</div></div>
  </article>`).join("");

$("memberTable").innerHTML = [...members]
  .sort((a, b) => b.points - a.points)
  .map((m, i) => `<tr>
    <td class="rank-cell">#${String(i + 1).padStart(2, "0")}</td>
    <td><b>${m.name}</b></td><td>${m.role}</td>
    <td class="points">${m.points.toLocaleString("vi-VN")}</td>
  </tr>`).join("");

$("rulesList").innerHTML = rules.map((r, i) => `
  <article class="rule-card">
    <div class="rule-number">${String(i + 1).padStart(2, "0")}</div>
    <div><h3>${r[0]}</h3><p>${r[1]}</p></div>
  </article>`).join("");

$("menuToggle").addEventListener("click", () => $("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => $("mainNav").classList.remove("open"));
});
