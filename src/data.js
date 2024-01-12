import exterior from '@/assets/images/mercwash.jpeg'
import interior from '@/assets/images/interior.jpeg'
import fullservice from '@/assets/images/fullservice.jpeg'
import handwash from '@/assets/images/handwash.jpeg'
import touchless from '@/assets/images/touchless.jpeg'
import express from '@/assets/images/express.jpeg'
import detail from '@/assets/images/detail.jpeg'
import undercarriage from '@/assets/images/undercarriage.jpeg'
import speciality from '@/assets/images/speciality.jpeg'
import mobile from '@/assets/images/mobile.jpeg'
import fleet from '@/assets/images/fleet_car_wash.jpeg'
import waterless from '@/assets/images/waterless.jpeg'
import selfservice from '@/assets/images/waterless.jpeg'

const carWashesData = [
  {
    id: 1,
    name: "Exterior Wash",
    slug: "exterior_wash",
    image: exterior,
    description:
      "This is a basic wash that focuses solely on the exterior of the car. It typically includes a high-pressure rinse, soap application, scrubbing, and a final rinse to remove dirt, grime, and contaminants from the cars paint and exterior surfaces.",
  },
  {
    id: 2,
    name: "Interior Wash",
    slug: "interior_wash",
    image: interior,
    description:
      "An interior wash primarily involves cleaning the inside of the car. It includes vacuuming, dusting, and wiping down surfaces such as the dashboard, seats, doors, and windows. Interior washes can also include a thorough cleaning of carpets and upholstery.",
  },
  {
    id: 3,
    name: "Full-Service Car Wash",
    slug: "full_service_car_wash",
    image: fullservice,
    description:
      "A full-service car wash combines both exterior and interior cleaning. In addition to the exterior wash, it includes a comprehensive interior cleaning, which often involves detailing the dashboard, console, and cleaning or conditioning leather seats.",
  },
  {
    id: 4,
    name: "Hand Wash",
    slug: "hand_wash",
    image: handwash,
    description:
      "Hand washing is a method where trained professionals wash the car manually, often using soft sponges or mitts. This method is less likely to cause swirl marks or scratches on the cars paint compared to automated car washes.",
  },
  {
    id: 5,
    name: "Touchless (Automatic) Car Wash",
    slug: "automatic_wash",
    image: touchless,
    description:
      "Touchless car washes use high-pressure water jets and detergents to clean the car without physical contact. This method is less likely to cause surface damage but may not be as effective at removing stubborn dirt and grime.",
  },
  {
    id: 6,
    name: "Self-Service Car Wash",
    slug: "self_service_car_wash",
    image: selfservice,
    description:
      "Self-service car wash facilities provide the necessary equipment and cleaning products for car owners to wash their vehicles themselves. This option is cost-effective but requires the owner to do the work.",
  },
  {
    id: 7,
    name: "Express Car Wash",
    slug: "express_car_wash",
    image: express,
    description:
      "Express car washes are automated, fast-paced facilities designed to quickly clean the exterior of the car. They often include options for different levels of service, such as basic wash, wax, and tire cleaning.",
  },
  {
    id: 8,
    name: "Detailing Services",
    slug: "detailing_services",
    image: detail,
    description:
      "Detailing involves a thorough and meticulous cleaning of both the interior and exterior of the car. It includes tasks like paint correction, polishing, waxing, and the restoration of various surfaces to a like-new condition.",
  },
  {
    id: 9,
    name: "Undercarriage Wash",
    slug: "undercarriage_wash",
    image: undercarriage,
    description:
      "This type of wash focuses on cleaning the underside of the car, including the chassis, suspension components, and wheel wells. It helps remove dirt, salt, and road debris that can accumulate in these areas.",
  },
  {
    id: 10,
    name: "Specialty Washes",
    slug: "speciality_washes",
    image: speciality,
    description:
      "Some car washes offer specialty services, such as engine bay cleaning, headlight restoration, or pet hair removal. These services target specific cleaning needs.",
  },
  {
    id: 11,
    name: "Waterless Car Wash",
    slug: "waterlesscar_wash",
    image: waterless,
    description:
      "Waterless car wash products and services use specialized cleaners and wax to clean the cars exterior without the need for water. This is an eco-friendly option that conserves water.",
  },
  {
    id: 12,
    name: "Mobile Car Wash",
    slug: "mobile_car_wash",
    image: mobile,
    description:
      "Mobile car wash services come to your location, whether its your home or workplace, and provide car cleaning services. This is a convenient option for those who dont want to travel to a car wash facility.",
  },
  {
    id: 13,
    name: "Fleet Wash",
    slug: "fleet_wash",
    image: fleet,
    description:
      "Fleet wash services are designed for businesses with multiple vehicles, such as delivery companies or taxi services. They offer bulk cleaning solutions for a fleet of vehicles.",
  },
];

export default carWashesData;
