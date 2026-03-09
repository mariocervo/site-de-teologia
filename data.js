// data.js

export const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'teologia', name: 'Teologia' },
    { id: 'escatologia', name: 'Escatologia' },
    { id: 'hermeneutica', name: 'Hermenêutica' },
    { id: 'estudo-biblico', name: 'Estudo Bíblico' }
];



export const ebooks = [
    {
        id: 1,
        title: '67 Ideias de Pregações',
        description: 'Tem dificuldade em transformar seus conhecimentos bíblicos em pregações impactantes? Com este e-book você terá acesso a esboços prontos que vão ajudar a organizar suas mensagens. Toque em comprar e saiba mais.',
        price: 'De R$ 97,00 por 6x de R$ 08,82',
        category: 'estudo-biblico',
        image: 'img/pregacoes.webp',
        hotmartLink: 'https://pay.hotmart.com/A104759967E?checkoutMode=10&split=6',
        bestseller: true
    },
    {
        id: 2,
        title: 'Apocalipse Descomplicado',
        description: 'Quer entender de uma vez por todas o livro de Apocalipse? Descubra seus significados, compreenda as visões simbólicas e aprenda a interpretar esse livro tão importante da Bíblia. Toque em comprar e saiba mais.',
        price: 'De R$ 97,00 por 6x de R$ 08,82',
        category: 'escatologia',
        image: 'img/apocalipse.webp',
        hotmartLink: 'https://pay.hotmart.com/W104760699Q?checkoutMode=10&split=6',
        bestseller: true
    },
    {
        id: 3,
        title: 'Bíblia na Ponta da Língua – Memorização sem Esforço',
        description: 'Aprenda técnicas de memorização bíblica com repetição estratégica. Este e-book mostra como aplicar o método de espaçamento para fortalecer sua memória e guardar passagens bíblicas com mais facilidade.',
        price: 'De R$ 97,00 por 6x de R$ 08,82',
        category: 'estudo-biblico',
        image: 'img/biblia.webp',
        hotmartLink: 'https://pay.hotmart.com/R104774512W?checkoutMode=10',
        bestseller: false
    }
];



export const courses = [
    {
        id: 'c1',
        title: '',
        description: '',
        image: '',
        tags: [],
        link: ''
    },
    {
        id: 'c2',
        title: '',
        description: '',
        image: '',
        tags: [],
        link: ''
    }
];



export const articles = [
    {
        id: 'a1',
        title: '',
        date: '',
        category: '',
        image: ''
    },
    {
        id: 'a2',
        title: '',
        date: '',
        category: '',
        image: ''
    },
    {
        id: 'a3',
        title: '',
        date: '',
        category: '',
        image: ''
    }
];



export const testimonials = [
    {
        id: 1,
        name: '',
        role: '',
        text: '',
        rating: 5
    },
    {
        id: 2,
        name: '',
        role: '',
        text: '',
        rating: 5
    },
    {
        id: 3,
        name: '',
        role: '',
        text: '',
        rating: 5
    }
];
