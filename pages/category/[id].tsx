import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { client } from "../../src/libs/client"
import { Blog, Category, Params } from "../../src/types/blog";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import Image from "next/image";

type P = {
    blog: Blog[]
}

export default function CategoryId({ blog }: P) {

        console.log(blog)

    if (blog.length === 0) {
        return <div>ブログコンテンツがありません</div>;
    }
    return (
        <Box component='div' sx={{
            width: 'calc(70% - 20px)',
        }}>
            <Box component='div' sx={{
                display:'flex',
                m: '20px',
            }}>
                <FolderCopyIcon/>
                <Typography
                component='h1'
                sx={{ml: '10px'}}
                >{blog[0].category.name}</Typography>
            </Box>
                {blog.map((blog) => (
                <Box 
                    component='article'
                    key={blog.id}
                    sx={{
                        mb: '30px',
                        pb: '30px',
                        width: '100%',
                        display: 'flex',
                        position: 'relative',
                    }}
                >
                    <Link href={blog.category ? `/category/${blog.category.id}` : '/'}>
                        <Box
                            component='a'
                            sx={blog.category ? {
                                right: 0,
                                bgcolor: 'rgba(3, 169, 244, .6)',
                                p: 1,
                                borderRadius: 1,
                                position: 'absolute',
                                display: 'flex',
                                zIndex: 10,
                                cursor: 'pointer',
                                '&:hover': {bgcolor: 'rgba(3, 169, 244, .9)'},
                            } : {display: 'none'}}
                        >
                            <FolderCopyIcon sx={{
                                fontSize: 'small',
                                m: 'auto 4px auto 0',
                            }}/>
                            <Typography sx={{fontSize: 'small'}} >
                                {blog.category ? blog.category.name : undefined}
                            </Typography>
                        </Box> 
                    </Link>
                    <Box
                        component='div'
                        sx={{
                            overflow: 'hidden',
                            width: '100%',
                        }}
                    >
                        <Box
                            component='div'
                            sx={{
                                transition: '.5s',
                                width: '100%',
                                '&:hover': {
                                    transform: 'Scale(1.2)'
                                }
                        }}>
                            <Link href={`/blog/${blog.id}`}>
                                <Box
                                    component='a'
                                    sx={{
                                        cursor: 'pointer',
                                }} >
                                    <Image
                                        src={blog.image ? `${blog.image.url}` : '/images/noimage.png'}
                                        layout='responsive'
                                        width={16}
                                        height={9}
                                        priority={true}
                                    />
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        ml: '15px',
                    }}>
                        <Link href={`/blog/${blog.id}`}>
                            <Typography component='a'>
                                <Typography
                                    component='h2'
                                    variant='h4'
                                    sx={{
                                        mb: '10px',
                                        lineHeight: 1.5,
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                    }}
                                    >{blog.title}
                                </Typography>
                            </Typography>
                        </Link>
                        <Box sx={{
                            display: {xs: 'none', sm: 'block'},
                            mb: '20px'
                        }}>
                            <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} />
                        </Box>
                    </Box>
                </Box>
                ))}
        </Box>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "categories" });

    const paths = data.contents.map((content: Category) => `/category/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: Params) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}` } });

    return {
        props: {
        blog: data.contents,
        },
    };
};