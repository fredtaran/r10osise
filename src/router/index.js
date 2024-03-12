import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store'
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
      meta: { requiresAuth: true, roles: ['3'] }
    },
    // User Profile
    {
      path: '/user_profile',
      name: 'user-profile',
      component: UserProfileView,
      meta: { requiresAuth: true, roles: ['3'] }
    },
    // User Educational Background
    {
      path: '/user_educational_backgroud',
      name: 'user-educational-background',
      component: UserEducationalBackground,
      meta: { requiresAuth: true, roles: ['2'] }
    },
    // Board Exams/Certification
    {
      path: '/user_board-exam',
      name: 'user-board-exam',
      component: UserBoardExamAndCertification,
      meta: { requiresAuth: true, roles: ['3'] }
    },
    // Work Experience
    {
      path: '/user_work_experience',
      name: 'user-work-experience',
      component: UserWorkExperienceView,
      meta: { requiresAuth: true, roles: ['3'] }
    },
    // Trainings
    {
      path: '/user_training',
      name: 'user-training',
      component: UserTrainingView,
      meta: { requiresAuth: true, roles: ['3'] }
    },
  ]
})

router.beforeEach((to, from, next) => {
  
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // This route requires authentication, check if the user is authenticated
    if (!store.state.user) {
      // User is not authenticated, redirect to login
      next({ name: 'Login' });
    } else {
      // User is authenticated, proceed to the route
      next();
    }
  } else {
    // Check if user is authenticated
    if(!store.state.user) {
      next();
    } else {
      // Check user role and redirect
      if(store.state.user.role == 3) {
        next('/user_dashboard')
      }
    }
  }
});

export default router
