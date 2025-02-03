import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '../Auth.vue';
import AppNavbar from '../layout/AppNavbar.vue';
import AppSidebar from '../layout/AppSidebar.vue';
import Dashboard from '../views/Dashboard.vue';
import AnalyzeResultsGroup from '../views/analyze_results/Group.vue'
import AnalyzeResultsPersonal from '../views/analyze_results/Personal.vue'
import Account from '../views/master/account/Account.vue';
import Student from '../views/master/students/Student.vue';
import Teacher from '../views/master/teachers/Teacher.vue';
import Class from '../views/master/class/Class.vue';
import Subject from '../views/master/subject/Subject.vue';
import Schedule from '../views/master/schedule/Schedule.vue';
import Category from '../views/master/category/Category.vue';
import Role from '../views/master/roles/Role.vue';
import ScheduleExam from '../views/exam_data/question_bank/schedule_exam/ScheduleExam.vue';
import QuestionList from '../views/exam_data/question_bank/questions_list/QuestionList.vue';
import Exam from '../views/exam_data/question_bank/exam_test/Exam.vue';
import ResultTest from '../views/exam_data/result_test/ResultTest.vue';
import DetailResultTest from '../views/exam_data/result_test/DetailResultTest.vue';
import Academic from '../views/assessment_data/academic/Academic.vue';
import GradeCategory from '../views/assessment_data/academic/GradeCategory.vue';
import ListGrade from '../views/assessment_data/academic/ListGrade.vue';
import NonAcademic from '../views/assessment_data/non_academic/NonAcademic.vue';
import GradeCategoryNon from '../views/assessment_data/non_academic/GradeCategory.vue';
import ListGradeNon from '../views/assessment_data/non_academic/ListGrade.vue';
import PerformanceAcademic from '../views/assessment_data/performance_academic/PerformanceAcademic.vue';
import DetailPerformanceAcademic from '../views/assessment_data/performance_academic/DetailPerformanceAcademic.vue';
import Login from '../views/auth/Login.vue';
import { nextTick } from 'vue';
import Answers from '../views/exam_data/question_bank/questions_list/answers/Answers.vue';

const routes = [
  /* Login */
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login,
    },
    meta: { 
      layout: 'AuthLayout',
      title: 'Login',
      description: 'Login',
      pathName: 'Login',
    },
  },

  /* Dashboard */
  {
    path: '/',
    name: 'dashboard',
    components: {
      navbar: AppNavbar,
      default: Dashboard,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Dashboard',
      description: 'Test Description',
      pathName: 'Dashboard',
      requiresAuth: true
    },
  },

  /* Data Ujian */
  {
    path: '/data-ujian/bank-soal',
    name: 'bank-soal',
    components: {
      navbar: AppNavbar,
      default: ScheduleExam,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Bank Soal',
      pathName: 'Bank Soal - Jadwal',
      requiresAuth: true
    },
  },
  {
    path: '/data-ujian/bank-soal/daftar-soal',
    name: 'daftar-soal',
    components: {
      navbar: AppNavbar,
      default: QuestionList,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Daftar Soal',
      pathName: 'Bank Soal - Jadwal - Daftar Soal',
      requiresAuth: true
    },
  },
  {
    path: '/data-ujian/bank-soal/daftar-soal/jawaban',
    name: 'jawaban',
    components: {
      navbar: AppNavbar,
      default: Answers,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Jawaban',
      pathName: 'Bank Soal - Jadwal - Daftar Soal - Jawaban',
      requiresAuth: true
    },
  },
  {
    path: '/simulasi-ujian',
    name: 'simulasi-ujian',
    components: {
      default: Exam,
    },
    meta: { 
      title: 'Simulasi Ujian',
      pathName: 'Simulasi Ujian',
      requiresAuth: true
    },
  },
  {
    path: '/data-ujian/kategori-ujian',
    name: 'kategori-ujian',
    components: {
      navbar: AppNavbar,
      default: Category,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Kategori Ujian',
      pathName: 'Kategori Ujian',
      requiresAuth: true
    },
  },
  {
    path: '/data-ujian/hasil-tes',
    name: 'hasil-tes',
    components: {
      navbar: AppNavbar,
      default: ResultTest,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Hasil Tes',
      pathName: 'Data Ujian - Hasil Tes',
      requiresAuth: true
    },
  },
  {
    path: '/data-ujian/hasil-tes/detail',
    name: 'hasil-tes-detail',
    components: {
      navbar: AppNavbar,
      default: DetailResultTest,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Detail Hasil Tes',
      pathName: 'Data Ujian - Hasil Tes - Detail',
      requiresAuth: true
    },
  },

  /* Data Nilai */
  {
    path: '/data-nilai/akademik',
    name: 'data-nilai-akademik',
    components: {
      navbar: AppNavbar,
      default: Academic,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Nilai Akademik',
      pathName: 'Data Nilai - Akademik',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/akademik/kategori',
    name: 'data-nilai-akademik-kategori',
    components: {
      navbar: AppNavbar,
      default: GradeCategory,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Kategori Nilai Akademik',
      pathName: 'Data Nilai - Akademik - Kategori',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/akademik/daftar-nilai',
    name: 'data-nilai-akademik-daftar-nilai',
    components: {
      navbar: AppNavbar,
      default: ListGrade,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Daftar Nilai Akademik',
      pathName: 'Data Nilai - Akademik - Daftar Nilai',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/non-akademik',
    name: 'data-nilai-non-akademik',
    components: {
      navbar: AppNavbar,
      default: NonAcademic,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Nilai Non Akademik',
      pathName: 'Data Nilai - Non Akademik',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/non-akademik/kategori',
    name: 'data-nilai-non-akademik-kategori',
    components: {
      navbar: AppNavbar,
      default: GradeCategoryNon,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Kategori Nilai Non Akademik',
      pathName: 'Data Nilai - Non Akademik - Kategori',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/non-akademik/daftar-nilai',
    name: 'data-nilai-non-akademik-daftar-nilai',
    components: {
      navbar: AppNavbar,
      default: ListGradeNon,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Daftar Nilai Non Akademik',
      pathName: 'Data Nilai - Non Akademik - Daftar Nilai',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/prestasi',
    name: 'data-nilai-prestasi',
    components: {
      navbar: AppNavbar,
      default: PerformanceAcademic,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Daftar Nilai Prestasi',
      pathName: 'Data Nilai - Prestasi',
      requiresAuth: true
    },
  },
  {
    path: '/data-nilai/prestasi/detail',
    name: 'data-nilai-prestasi-detail',
    components: {
      navbar: AppNavbar,
      default: DetailPerformanceAcademic,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Detail Nilai Prestasi',
      pathName: 'Data Nilai - Prestasi - Detail',
      requiresAuth: true
    },
  },

  /* Laporan Hasil */
  {
    path: '/analyze-result/group',
    name: 'analyze-result group',
    components: {
      navbar: AppNavbar,
      default: AnalyzeResultsGroup,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Hasil Analisis Kelompok',
      pathName: 'Laporan Analisis',
      requiresAuth: true
    },
  },
  {
    path: '/analyze-result/personal',
    name: 'analyze-result personal',
    components: {
      navbar: AppNavbar,
      default: AnalyzeResultsPersonal,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Hasil Analisis Individu',
      pathName: 'Laporan Analisis',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-akun',
    name: 'master data-akun',
    components: {
      navbar: AppNavbar,
      default: Account,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Akun',
      pathName: 'Master - Data Akun',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-siswa',
    name: 'master data-siswa',
    components: {
      navbar: AppNavbar,
      default: Student,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Siswa',
      pathName: 'Master - Data Siswa',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-guru',
    name: 'master data-guru',
    components: {
      navbar: AppNavbar,
      default: Teacher,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Guru',
      pathName: 'Master - Data Guru',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-kelas',
    name: 'master data-kelas',
    components: {
      navbar: AppNavbar,
      default: Class,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Kelas',
      pathName: 'Master - Data Kelas',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-mata-pelajaran',
    name: 'master data-mata-pelajaran',
    components: {
      navbar: AppNavbar,
      default: Subject,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Mata Pelajaran',
      pathName: 'Master - Data Mata Pelajaran',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-jadwal',
    name: 'master data-jadwal',
    components: {
      navbar: AppNavbar,
      default: Schedule,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Jadwal',
      pathName: 'Master - Data Jadwal',
      requiresAuth: true
    },
  },
  {
    path: '/master/data-kategori',
    name: 'master data-kategori',
    components: {
      navbar: AppNavbar,
      default: Category,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Data Kategori',
      pathName: 'Master - Data Kategori',
      requiresAuth: true
    },
  },
  {
    path: '/master/hak-akses',
    name: 'master hak-akses',
    components: {
      navbar: AppNavbar,
      default: Role,
      sidebar: AppSidebar,
    },
    meta: { 
      title: 'Hak Akses',
      pathName: 'Master - Hak Akses',
      requiresAuth: true
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to) => {
  const { title, description } = to.meta;
  const defaultTitle = 'Kenalin | ';

  document.title = defaultTitle + title || defaultTitle  

  const isAuthenticated = localStorage.getItem('jwt');

  if (to.meta.requiresAuth && (!isAuthenticated || isAuthenticated === 'null')) {
    return { path: '/login' }; // Redirect ke halaman login
  }
  // Jika sudah login atau tidak butuh autentikasi, lanjutkan
  return true;
})

export default router;
