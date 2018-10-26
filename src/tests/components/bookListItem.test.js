import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import BookListItem from '../../components/book_list_item';

describe('BookListItem', () => {
  let bookListItemComp;
  const props = {
    book: {
      language: '',
      link: 'www.google.com'
    }
  };

  beforeEach(() => {
    bookListItemComp = shallow(<BookListItem {...props} />);
  });

  it('renders an BookListItem snapshot', () => {
    const tree = toJson(bookListItemComp);
    expect(tree).toMatchSnapshot();
  });

  it('renders icon when book language is English', () => {
    bookListItemComp.setProps({ book: { language: 'English' } });
    expect(bookListItemComp.find('[name="bookLanguage"]')).toHaveLength(1);
  });

  it('does not render an icon when book is a language other than English', () => {
    bookListItemComp.setProps({ book: { language: 'Danish' } });
    expect(bookListItemComp.find('[name="bookLanguage"]')).toHaveLength(0);
  });
});