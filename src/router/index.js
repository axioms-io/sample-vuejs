import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';

Vue.use(Router)

const router = new Router({ mode: "history", routes })

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (Vue.prototype.$auth.session.is_authenticated()) {
            next()
            return
        }
        // Either
        // localStorage.setItem('post_login_path', from.path)
        // next('/login')
        // Or
        next(`/login?next=${to.path}`)
    } else {
        next()
    }
})

export default router