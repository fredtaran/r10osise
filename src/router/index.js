import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UserDashboardView from '../views/UserDashboardView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import UserBoardExamAndCertification from '../views/UserBoardExamAndCertificationView.vue'
import UserEducationalBackground from '../views/UserEducationalBackgroundView.vue'
import UserWorkExperienceView from '../views/UserWorkExperienceView.vue'
import UserTrainingView from '../views/UserTrainingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Login
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    // User Dashboard
    {
      path: '/user_dashboard',
      name: 'user-dashboard',
      component: UserDashboardView
    },
    // User Profile
    {
      path: '/user_profile',
      name: 'user-profile',
      component: UserProfileView
    },
    // User Educational Background
    {
      path: '/user_educational_backgroud',
      name: 'user-educational-background',
      component: UserEducationalBackground
    },
    // Board Exams/Certification
    {
      path: '/user_board-exam',
      name: 'user-board-exam',
      component: UserBoardExamAndCertification
    },
    // Work Experience
    {
      path: '/user_work_experience',
      name: 'user-work-experience',
      component: UserWorkExperienceView
    },
    // Trainings
    {
      path: '/user_training',
      name: 'user-training',
      component: UserTrainingView
    },
  ]
})

export default router
