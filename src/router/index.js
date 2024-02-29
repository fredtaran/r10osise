import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserDashboardView from '@/views/UserDashboardView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserBoardExamAndCertification from '@/views/UserBoardExamAndCertificationView.vue'
import UserEducationalBackground from '@/views/UserEducationalBackgroundView.vue'
import UserWorkExperienceView from '@/views/UserWorkExperienceView.vue'
import UserTrainingView from '@/views/UserTrainingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Login
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    // Login
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false }
    },
    // User Dashboard
    {
      path: '/user_dashboard',
      name: 'user-dashboard',
      component: UserDashboardView,
      meta: { requiresAuth: true, roles: ['user'] }
    },
    // User Profile
    {
      path: '/user_profile',
      name: 'user-profile',
      component: UserProfileView,
      meta: { requiresAuth: true, roles: ['user'] }
    },
    // User Educational Background
    {
      path: '/user_educational_backgroud',
      name: 'user-educational-background',
      component: UserEducationalBackground,
      meta: { requiresAuth: true, roles: ['user'] }
    },
    // Board Exams/Certification
    {
      path: '/user_board-exam',
      name: 'user-board-exam',
      component: UserBoardExamAndCertification,
      meta: { requiresAuth: true, roles: ['user'] }
    },
    // Work Experience
    {
      path: '/user_work_experience',
      name: 'user-work-experience',
      component: UserWorkExperienceView,
      meta: { requiresAuth: true, roles: ['user'] }
    },
    // Trainings
    {
      path: '/user_training',
      name: 'user-training',
      component: UserTrainingView,
      meta: { requiresAuth: true, roles: ['user'] }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = ""
  const userRole = ""

  if(to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else if(to.meta.requiresAuth && to.meta.roles && !to.meta.roles.includes(userRole)) {
    if(userRole === "user") {
      next('/user_dashboard')
    }
  } else if (to.path === '/' && isAuthenticated) {
    // If the user is already authenticated, redirect them to the appropriate dashboard or home page
    if(userRole === "user") {
      next('/user_dashboard')
    }
  } else {
    next()
  }
})

export default router
