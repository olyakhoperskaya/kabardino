const food = [
  ["Хычины", "балкарская", "Лепёшки с сыром и картошкой", "img/food-a.jpg"],
  ["Гедлибже", "кабардинская", "Курица в сметанном соусе", "img/food-b.jpg"],
  ["Паста с шипсом", "кабардинская", "Пшённая паста и мясной соус", "img/food-c.jpg"],
  ["Лакумы", "кабардинская", "Пышные жареные пончики", "img/food-d.jpg"],
  ["Шашлык", "народы Кавказа", "Самый вкусный шашлык", "img/food-e.jpg"],
  ["Пастила", "с собой", "Яблочная, лучший сувенир", "img/food-f.jpg"]
];

const days = {
  1: {
    title: "День 1. Знакомство",
    summary: "Нальчик, Голубые озёра, Верхняя Балкария.",
    note: "Линия — автомобильный маршрут Яндекса между точками дня.",
    stops: [
      { t: "10:00", name: "Атажукинский сад", text: "Парк с прудами и канатной дорогой. Нальчик.", lat: 43.46446, lon: 43.59067, pin: true, photo: "img/garden-cable.jpg" },
      { t: "12:00", name: "Свободное время в Нальчике", text: "Исторический центр, современные районы.", lat: 43.49806, lon: 43.61889, pin: true, photo: "img/nalchik-mural.jpg" },
      { t: "15:00", name: "Выезд на юг", text: "После обеда. В пути пешком и на такси. Поесть: хычины «Берекет»." },
      { t: "16:00", name: "Голубые озёра", text: "Нижнее Голубое озеро в Черекском районе.", lat: 43.2327, lon: 43.53865, pin: true, photo: "img/blue-lake.jpg" },
      { t: "17:00", name: "Крепость Курноят-Къала", text: "Ориентир — селение Курноят в Черекском ущелье.", lat: 43.09002, lon: 43.50878, pin: true, photo: "img/fortress.jpg" },
      { t: "20:00", name: "Звёздное небо", text: "Первая ночь в гостинице в горах. Поесть: ресторан «Старая Балкария». В пути около 2 часов.", lat: 43.09931, lon: 43.43713, pin: true, photo: "img/stars.jpg" }
    ]
  },
  2: {
    title: "День 2. Водопады",
    summary: "Обратно через Нальчик и в Чегемское ущелье. На обзорной карте этот день подписан как Черекское ущелье.",
    note: "Греческая лестница стоит на дороге ущелья между водопадами и Эльтюбю: точного адреса на слайде нет.",
    stops: [
      { t: "8:00", name: "Выезд обратно в Нальчик", text: "После завтрака в ресторане с панорамным видом. Завтрак в «Старой Балкарии».", lat: 43.12529, lon: 43.45789, pin: true, photo: "img/arch.jpg" },
      { t: "11:00", name: "Музей Кабардино-Балкарской республики", text: "Краеведческий музей на улице Горького.", lat: 43.48654, lon: 43.60818, pin: true, photo: "img/museum.jpg" },
      { t: "15:00", name: "Выезд к водопадам", text: "После обеда. В пути: около 3 часов до Нальчика и 2 часов до водопадов." },
      { t: "16:00", name: "Чегемские водопады", text: "Чегемская теснина.", lat: 43.41634, lon: 43.21731, pin: true, photo: "img/waterfalls.jpg" },
      { t: "17:00", name: "Греческая лестница", text: "Тропа по скале Чегемского ущелья. Точка стоит на дороге между водопадами и Эльтюбю.", lat: 43.34, lon: 43.18, pin: true, photo: "img/greek-stairs.jpg" },
      { t: "18:00", name: "Могильники Фардык-Кешене", text: "Рядом с Эльтюбю. Ужин в ресторане «Домик в Чегеме», прибытие обратно около 20:30. В пути около 2 часов в одну сторону.", lat: 43.276, lon: 43.148, pin: true, photo: "img/tombs.jpg" }
    ]
  },
  3: {
    title: "День 3. К Эльбрусу",
    summary: "Приэльбрусье: Тырныауз и канатная дорога.",
    note: "Подъём на канатке на слайде — до 3847 м. Гостиница «Чипер Азау» отмечена у Терскола: на слайде указана высота 3000 м.",
    stops: [
      { t: "10:00", name: "Тырныауз", text: "Смотрим на жизнь типичного города в КБР и едим. Хычины «Берекет».", lat: 43.3959, lon: 42.92308, pin: true, photo: "img/tyrnyauz.jpg" },
      { t: "12:00", name: "Канатная дорога", text: "Подъём на 3847 м за полчаса — будет холодно. Нижняя станция на поляне Азау.", lat: 43.26632, lon: 42.47997, pin: true, photo: "img/cable-car.jpg" },
      { t: "15:00", name: "Отдых с видом на Эльбрус", text: "Гостиница «Чипер Азау». В пути 3–5 часов до Эльбруса.", lat: 43.25608, lon: 42.51324, pin: true, photo: "img/elbrus.jpg" }
    ]
  }
};

const quiz = [
  {
    q: "Высшая точка республики, России и Европы — это",
    options: ["Казбек", "Эльбрус", "Дыхтау"],
    answer: 1
  },
  {
    q: "Какой народ составляет большинство населения?",
    options: ["Балкарцы", "Русские", "Кабардинцы"],
    answer: 2
  },
  {
    q: "Аталычество — это",
    options: [
      "приём ребёнка в семью на воспитание",
      "обряд вывода невесты из родного дома",
      "общий стол для гостя и хозяина"
    ],
    answer: 0
  },
  {
    q: "Хычины — это",
    options: [
      "лепёшки с сыром и картошкой",
      "курица в сметанном соусе",
      "пшённая паста с мясным соусом"
    ],
    answer: 0
  },
  {
    q: "На какой высоте стоит Нальчик?",
    options: ["около 500 м", "около 2000 м", "3847 м"],
    answer: 0
  }
];

const foodRoot = document.querySelector("#food");
const tried = new Set(JSON.parse(localStorage.getItem("kbr-food") || "[]"));

food.forEach(([name, origin, text, image], index) => {
  const card = document.createElement("article");
  card.className = "dish" + (tried.has(index) ? " is-tried" : "");
  card.innerHTML = `<img src="${image}" alt="${name}"><h3>${name}</h3><p class="origin">${origin}</p><p>${text}</p>`;
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = tried.has(index) ? "В списке" : "Хочу попробовать";
  button.addEventListener("click", () => {
    if (tried.has(index)) tried.delete(index);
    else tried.add(index);
    localStorage.setItem("kbr-food", JSON.stringify([...tried]));
    card.classList.toggle("is-tried", tried.has(index));
    button.textContent = tried.has(index) ? "В списке" : "Хочу попробовать";
  });
  card.append(button);
  foodRoot.append(card);
});

const map = document.querySelector("#map");
const mapLink = document.querySelector("#map-link");
const mapNote = document.querySelector("#map-note");
const dayTitle = document.querySelector("#day-title");
const daySummary = document.querySelector("#day-summary");
const timeline = document.querySelector("#timeline");

function pinsOf(dayNumber) {
  return days[dayNumber].stops.filter((stop) => stop.pin);
}

function widgetSrc(stops, zoom) {
  if (stops.length === 1) {
    const s = stops[0];
    return `https://yandex.ru/map-widget/v1/?ll=${s.lon}%2C${s.lat}&z=13&pt=${s.lon}%2C${s.lat},pm2blm&l=map`;
  }
  const lats = stops.map((s) => s.lat);
  const lons = stops.map((s) => s.lon);
  const lat = (Math.min(...lats) + Math.max(...lats)) / 2;
  const lon = (Math.min(...lons) + Math.max(...lons)) / 2;
  const rtext = stops.map((s) => `${s.lat},${s.lon}`).join("~");
  return `https://yandex.ru/map-widget/v1/?ll=${lon},${lat}&z=${zoom}&rtext=${rtext}&rtt=auto&l=map`;
}

function mapsHref(stops) {
  const rtext = stops.map((s) => `${s.lat},${s.lon}`).join("~");
  return `https://yandex.ru/maps/?rtext=${encodeURIComponent(rtext)}&rtt=auto`;
}

function showDay(key) {
  document.querySelectorAll(".day-btn").forEach((btn) => {
    const on = btn.dataset.day === String(key);
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });

  if (key === "all") {
    const colors = { 1: "bl", 2: "gn", 3: "or" };
    const pins = [1, 2, 3].flatMap((n) => pinsOf(n).map((s) => ({ ...s, color: colors[n] })));
    dayTitle.textContent = "Все отметки";
    daySummary.textContent = "День 1 уходит на юг, в Черек. День 2 — в Чегем. День 3 — на запад, к Эльбрусу.";
    mapNote.textContent = "Синие точки — день 1, зелёные — день 2, оранжевые — день 3. Общей линии нет: дни расходятся и возвращаются в Нальчик.";
    const pt = pins.map((s) => `${s.lon},${s.lat},pm2${s.color}m`).join("~");
    map.src = `https://yandex.ru/map-widget/v1/?ll=43.15,43.35&z=8&pt=${pt}&l=map`;
    mapLink.href = "https://yandex.ru/maps/?ll=43.15,43.35&z=8";
    timeline.innerHTML = "";
    [1, 2, 3].forEach((n) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "stop";
      button.innerHTML = `<time>День ${n}</time><strong>${days[n].title.replace(/^День \d+\. /, "")}</strong><span>${days[n].summary}</span>`;
      button.addEventListener("click", () => showDay(n));
      item.append(button);
      timeline.append(item);
    });
    return;
  }

  const day = days[key];
  dayTitle.textContent = day.title;
  daySummary.textContent = day.summary;
  mapNote.textContent = day.note;
  const routeStops = pinsOf(key);
  if (key === 3) routeStops.unshift({ lat: 43.49806, lon: 43.61889 });
  map.src = widgetSrc(routeStops, key === 3 ? 8 : 10);
  mapLink.href = mapsHref(routeStops);
  timeline.innerHTML = "";
  day.stops.forEach((stop) => {
    const item = document.createElement("li");
    if (!stop.pin) {
      item.className = "travel";
      item.innerHTML = `<time>${stop.t}</time> <strong>${stop.name}.</strong> ${stop.text}`;
      timeline.append(item);
      return;
    }
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stop";
    const picture = stop.photo ? `<img src="${stop.photo}" alt="">` : "";
    button.innerHTML = `${picture}<time>${stop.t}</time><strong>${stop.name}</strong><span> ${stop.text}</span>`;
    button.addEventListener("click", () => {
      timeline.querySelectorAll(".stop").forEach((el) => el.classList.remove("is-on"));
      button.classList.add("is-on");
      map.src = widgetSrc([stop]);
      mapLink.href = `https://yandex.ru/maps/?pt=${stop.lon},${stop.lat}&z=13&l=map`;
    });
    item.append(button);
    timeline.append(item);
  });
}

document.querySelectorAll(".day-btn").forEach((btn) => {
  btn.addEventListener("click", () => showDay(btn.dataset.day === "all" ? "all" : Number(btn.dataset.day)));
});
showDay(1);

const form = document.querySelector("#quiz-form");
quiz.forEach((item, qi) => {
  const field = document.createElement("fieldset");
  field.className = "q";
  field.innerHTML = `<legend>${qi + 1}. ${item.q}</legend>`;
  item.options.forEach((option, oi) => {
    const id = `q${qi}o${oi}`;
    const label = document.createElement("label");
    label.className = "choice";
    label.innerHTML = `<input type="radio" name="q${qi}" value="${oi}" id="${id}" required> ${option}`;
    field.append(label);
  });
  form.append(field);
});
const submit = document.createElement("button");
submit.type = "submit";
submit.textContent = "Проверить";
form.append(submit);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  quiz.forEach((item, qi) => {
    const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
    const labels = form.querySelectorAll(`fieldset:nth-of-type(${qi + 1}) label`);
    labels.forEach((label, oi) => {
      label.classList.toggle("is-good", oi === item.answer);
      label.classList.toggle("is-bad", Number(chosen.value) === oi && oi !== item.answer);
    });
    if (Number(chosen.value) === item.answer) score += 1;
  });
  const result = document.querySelector("#quiz-result");
  result.textContent = score === quiz.length
    ? `Все ${quiz.length} из ${quiz.length}. Можно ехать.`
    : `${score} из ${quiz.length}. Ответы подсвечены.`;
});
