import { Component } from '@angular/core';
import { Disease } from './disease';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private diseases: Array<Disease> = [
    {
      description: "Scary; Spontaneous. Unexpected.",
      dos: ["Call 911 for an ambulance if you feel a stroke coming on", "Let the paramedics know about any drug allergies or past medical history", "Get ready the patient’s personal effects such as personal identification, medical benefit identification, insurance and other documents for admission."],
      donts: ["Do not ignore signs!", "Do not drive, get to the hospital immedietly!"],
      img: "https://image.shutterstock.com/image-vector/heart-attack-fast-food-cartoon-450w-353946482.jpg",
      name: "Heart Attack",
      probability: 50,
      info: "Possible symptoms of a heart attack ​​include the following: Pain that appears to spread up to the neck or down to the left arm Breathlessness Sweating Feeling faint and/ or nausea"
    },
    {
      description: "Sad boi over here and yes, it do be like that sometimes.",
      dos: ["Go see a psychiatrist if you feel you need help", "Your friends and loved ones are with you, take advantage!", "You can call the suicide hotline"],
      donts: [" Do not believe in your negative thoughts.", "Avoid alcohol and drugs.", "Avoid making major decisions during the episode of depression."],
      img: "https://www.freepik.com/blog/app/uploads/2017/03/02previa-4.jpg",
      name: "Depression",
      probability: 10,
      info: "Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to a variety of emotional and physical problems and can decrease a person’s ability to function at work and at home.   Depression symptoms can vary from mild to severe and can include: Feeling sad or having a depressed mood Loss of interest or pleasure in activities once enjoyed Changes in appetite — weight loss or gain unrelated to dieting Trouble sleeping or sleeping too much Loss of energy or increased fatigue Increase in purposeless physical activity(e.g., hand - wringing or pacing) or slowed movements and speech(actions observable by others) Feeling worthless or guilty Difficulty thinking, concentrating or making decisions Thoughts of death or suicide"
    },
    {
      description: "Netflix and comfort food is my idea of a first date.",
      dos: ["Do stay away from junk food!", "Cardio Excercises", "Avoid Tension"],
      donts: ["No greasy food", "Dont avoid signs"],
      img: "https://lh6.googleusercontent.com/F0UgBkpfE-4P0iV-WYo5ZIc6sL0m607FEZQR1tlIXCYG1njgNA5U9DyH2Dq4eTXCeRpGjlrPoFGRTBYew-Or7u_GI3ebzE8orBLa90WqCa7EDd_Hl-BcAw-dUuaKc48giw=s412",
      name: "Heart Disease",
      probability: 80,
      info: "Cardiovascular disease generally refers to conditions that involve narrowed or blocked blood vessels that can lead to a heart attack, chest pain (angina) or stroke. Other heart conditions, such as those that affect your heart's muscle, valves or rhythm, also are considered forms of heart disease."
    },
    {
      description: "I play no games, and go right for the money shot.",
      dos: ["Call 911", "Inform drug allergies", "Keep medical documents ready", "get to the hospital immedietly"],
      donts: ["Do not ignore signs!", "Do not drive"
      ],
      img: "https://i.ytimg.com/vi/nrMW_tcXZmw/maxresdefault.jpg",
      name: "Stroke",
      probability: 40,
      info: "A stroke is a “brain attack”. It can happen to anyone at any time. It occurs when blood flow to an area of brain is cut off. When this happens, brain cells are deprived of oxygen and begin to die. When brain cells die during a stroke, abilities controlled by that area of the brain such as memory and muscle control are lost."
    },
    {
      description: "Favorite snack: Cherioes",
      dos: ["Eating Cherioes might help lower Cholesterol", "Eat a wide variety of high-fiber foods, such as fruits, vegetables, and whole grains", "avoid fast food and junk food"],
      donts: ["Avoid anything fatty", "No red meat, other organ meats", "Less eggs, especially the yolks"],
      img: "https://pics.me.me/high-sodium-high-cholesterol-lots-of-toxins-your-blood-test-is-21634464.png",
      name: "High Cholesterol",
      probability: 20,
      info: "Treatable by a medical professional Requires a medical diagnosis Lab tests or imaging always required Chronic: can last for years or be lifelong High cholesterol can limit blood flow, increasing risk of heart attack or stroke. It's detected by a blood test. High cholesterol has no symptoms. Treatments include medications, a healthy diet, and exercise."
    },
    {
      description: "Hard to get a grasp on life. Always on the edge.",
      dos: ["Keep your joints moving!", "Be conscious and get enough sleep!", "Try your best to lose/maintain your weight"],
      donts: ["Avoid doing intense exercise", "Avoid smoking", "Don't give into depression"],
      img: "https://cowseatgrass.org/wp-content/uploads/2018/02/Arthy.jpg",
      name: "Arthritis",
      probability: 40,
      info: "Treatment can help, but this condition can't be cured Requires a medical diagnosis Lab tests or imaging often required Chronic: can last for years or be lifelong Different types of arthritis exist, each with different causes including wear and tear, infections, and underlying diseases. Symptoms include pain, swelling, reduced range of motion, and stiffness. Medications, physical therapy, or sometimes surgery helps reduce symptoms and improve quality of life."
    },
    {
      description: "I'm so cute, you'll get a sugar rush.",
      dos: ["Check blood sugar daily!", "Protein, protein, protein!", "Try your best to stay hydriated"],
      donts: ["Avoid fried and breaded vegetables", "No White bread, chips", "No foods which increase blood sugar."],
      img: "assets/diabetes.jpg",
      name: "Diabetes",
      probability: 20,
      info: "Diabetes is a disease in which your blood glucose, or blood sugar, levels are too high. Glucose comes from the foods you eat. Insulin is a hormone that helps the glucose get into your cells to give them energy. With type 1 diabetes, your body does not make insulin."
    }
  ];
  title = 'health-match';

  constructor(private navService: NavigationService) {
  }
}
