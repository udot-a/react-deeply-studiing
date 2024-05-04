import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	return (
		<Page
			className={classNames('', {}, [className])}
		>
			{isEdit
				? `Edit Page ID ${id}`
				: 'Create Page'
			}
		</Page>
	);
});

export default ArticleEditPage;
