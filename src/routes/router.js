import { createRouter, createWebHistory } from 'vue-router';
import AppNavbar from '../layout/AppNavbar.vue';
import AppSidebar from '../layout/AppSidebar.vue';
import Dashboard from '../views/Dashboard.vue';
import QuestionsBank from '../views/QuestionsBank.vue';
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

const routes = [
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
})

export default router;
