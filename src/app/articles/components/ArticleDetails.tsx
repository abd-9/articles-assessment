const ArticleDetails: React.FC<{ article: IArticle }> = ({ article }) => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
      <p className='text-gray-600 mb-4'>{article.abstract}</p>
      <p className='text-sm text-gray-500 mb-2'>
        Published Date: {new Date(article.published_date).toLocaleDateString()}
      </p>
      <p className='text-sm text-gray-500 mb-8'>By: {article.byline}</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {article.media.map((mediaItem, index) => (
          <div key={index} className='flex flex-col items-center'>
            {mediaItem.type === 'image' && (
              <img
                src={mediaItem['media-metadata']?.at(2)?.url || ''}
                alt={mediaItem.caption}
                className='rounded-lg shadow-lg'
              />
            )}
            <p className='mt-2 text-sm text-gray-500'>{mediaItem.caption}</p>
          </div>
        ))}
      </div>

      <div className='mt-8'>
        <a
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-block transition duration-300'
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default ArticleDetails;
