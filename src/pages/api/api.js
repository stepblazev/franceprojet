import axios from 'axios';

export const getNews = async lang => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/articles?language=${lang}`,
        );
        // console.log(data.data)
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const getOneNews = async (slug, lang) => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/articles/${slug}?language=${lang}`,
        );
        // console.log(data.data)
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const getBlogs = async lang => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/blogs?language=${lang}`,
        );
        // console.log(data.data)
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const getProjects = async lang => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/projects?language=${lang}`,
        );
        // console.log(data)
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getOneProject = async (slug,lang) => {
        // console.log(slug)

    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/projects/${slug}?language=${lang}`,
        );
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
