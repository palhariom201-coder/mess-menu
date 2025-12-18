import { fetchFeedback } from "./firebase.js";

export const renderMessMenu = (id) => {
  const dayMenu = messMenu[id];
  const breakfast = dayMenu.breakfast
    .map(
      (food) => `<li class="flex items-center">
            <i class="fas fa-check text-green-500 mr-3"></i>
            <span>${food}</span>
          </li>`
    )
    .join("");

  const lunch = dayMenu.lunch
    .map(
      (food) => `<li class="flex items-center">
            <i class="fas fa-check text-green-500 mr-3"></i>
            <span>${food}</span>
          </li>`
    )
    .join("");
  const dinner = dayMenu.dinner
    .map(
      (food) => `<li class="flex items-center">
            <i class="fas fa-check text-green-500 mr-3"></i>
            <span>${food}</span>
          </li>`
    )
    .join("");

  return `<div
      id=${dayMenu.day + "-menu"}
      class="menu-day grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-sun text-yellow-500 mr-2"></i>Breakfast
        </h3>
        <ul class="space-y-3">
          ${breakfast}
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-cloud-sun text-orange-500 mr-2"></i>Lunch
        </h3>
        <ul class="space-y-3">
          ${lunch}
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <i class="fas fa-moon text-blue-500 mr-2"></i>Dinner
        </h3>
        <ul class="space-y-3">
          ${dinner}
        </ul>
      </div>
    </div>`;
};

export const loader = () => {
  return `  <div class="flex flex-col items-center">
    <div class="w-10 h-10 border-6 border-white border-t-red-400 rounded-full animate-spin"></div>
  </div>`;
};
export const save = () => {
  return `<i class="fas fa-paper-plane mr-2"></i>
  Submit Feedback`;
};

const ratings = [
  {
    id: 1,
    star: '★☆☆☆☆'
  },
  {
    id: 2,
    star: '★★☆☆☆'
  },
  {
    id: 3,
    star: '★★★☆☆'
  },
  {
    id: 4,
    star: '★★★★☆'
  },
  {
    id: 5,
    star: '★★★★★'
  }
]

export const showComments = async () => {
  const data = await fetchFeedback();
  if(data.length == 0) return `<p class="flex justify-center h-50 items-center font-bold text-2xl">No Comments right now.<br /><br /> You are the first.</p>`;
  const comments = data.map(
    (
      comment
    ) => `<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          
          <!-- Header -->
          <div class="flex items-center justify-between">
            <h3 class="font-semibold text-gray-800">
              ${comment.name}
            </h3>
            <p class="text-gray-600">${comment.meal}</p>
            <!-- Rating -->
            <div class="flex items-center gap-1">
              <span class="text-yellow-400 font-semibold">${ratings[comment.rating-1].star}</span>
              <span class="text-sm text-gray-500">(${comment.rating})</span>
            </div>
          </div>

          <!-- Comment -->
          <p class="mt-2 text-gray-600 text-sm leading-relaxed">
            ${comment.comments}
          </p>

        </div>`
  ).join("");

  return comments;
};
export const messMenu = [
  {
    id: 0,
    day: "Sunday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
  {
    id: 1,
    day: "Monday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
  {
    id: 3,
    day: "Wednesday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
  {
    id: 4,
    day: "Thursday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
  {
    id: 5,
    day: "Friday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
  {
    id: 6,
    day: "Saturday",
    breakfast: [
      "Paneer Paratha with Curd",
      "Bread Toast & Jam",
      "Milk & Cornflakes",
      "Fresh Fruits",
    ],
    lunch: [
      "Jeera Rice & Dal Tadka",
      "Mix Veg & Paneer Butter Masala",
      "Roti & Salad",
      "Buttermilk",
    ],
    dinner: [
      "Chicken Biryani / Veg Biryani",
      "Raita & Papad",
      "Ice Cream / Gulab Jamun",
    ],
  },
];

