const Index = resolve => {
    require.ensure(['./components/Index.vue'], () => {
        resolve(require('./components/Index.vue'))
    })
}

const List = resolve => {
    require.ensure(['./components/List.vue'], () => {
        resolve(require('./components/List.vue'))
    })
}

const Topic = resolve => {
    require.ensure(['./components/Topic.vue'], () => {
        resolve(require('./components/Topic.vue'))
    })
}

const routes = [{
    path: '/',
    name: 'index',
    component: Index
}, {
    path: '/list',
    name: 'list',
    component: List
}, {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
}, {
    path: '*',
    component : Index
}]

export default routes

