import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getSlug } from './lib/files'
import rehypeImgSizeWithFullWidth from './lib/rehypeImgSizeWithFullWidth'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.@(md|mdx)`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'The sammary of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => getSlug(doc._raw.flattenedPath),
    },
    readtime: {
      type: 'string',
      resolve: (doc) => readingTime(doc.body.raw).text,
    },
  },
}))

export default makeSource({
  contentDirPath: '__contents',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      rehypeImgSizeWithFullWidth,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
