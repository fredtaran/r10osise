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
    // User Profile
    {
      path: '/user_profile',
      name: 'user-profile',
      component: UserProfileView,
      meta: { requiresAuth: true, roles: [3] }
    },
    // User Educational Background
    {
      path: '/user_educational_backgroud',
      name: 'user-educational-background',
      component: UserEducationalBackground,
      meta: { requiresAuth: true, roles: [3] }
    },
    // Board Exams/Certification
    {
      path: '/user_board-exam',
      name: 'user-board-exam',
      component: UserBoardExamAndCertification,
      meta: { requiresAuth: true, roles: [3] }
    },
    // Work Experience
    {
      path: '/user_work_experience',
      name: 'user-work-experience',
      component: UserWorkExperienceView,
      meta: { requiresAuth: true, roles: [3] }
    },
    // Trainings
    {
      path: '/user_training',
      name: 'user-training',
      component: UserTrainingView,
      meta: { requiresAuth: true, roles: [3] }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      // Redirect to login if not authenticated
      if (to.name !== 'login') {
        next({ name: 'login' });
      } else {
        // If already on the login page, proceed without redirecting
        next();
      }
    } else {
      const requiredRoles = to.meta.roles;
      if (requiredRoles && !requiredRoles.includes(store.state.user.role)) {
        // Redirect based on user role
        if (store.state.user.role === 3) {
          next({ name: 'user-dashboard' });
        } else if (store.state.user.role === 2) {

        }
      } else {
        next();
      }
    }
  } else {
    if (!store.state.user) {
      next();
    } else {
      // Redirect authenticated users to their dashboard or another appropriate page
      if (to.name !== 'user-profile') {
        next('/user_profile');
      } else {
        next();
      }
    }
  }
});



export default router
