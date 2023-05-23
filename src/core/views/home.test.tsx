import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn((key) => {
      if (key === 'categories') {
        return [
          {
            name: 'Category 1',
            sumup: 'Category 1 summary',
            picture: 'category1.jpg',
            path: '/category1',
          },
          {
            name: 'Category 2',
            sumup: 'Category 2 summary',
            picture: 'category2.jpg',
            path: '/category2',
          },
        ];
      }
      return '';
    }),
  }),
}));

describe('Home', () => {
  beforeEach( () => {
    render(
    < Router>
      <Home />
    </Router>
    );
  })
  test ('renders categories card name', () => {
    const name1 = screen.getByText('Category 2');
    const name2 = screen.getByText('Category 2');
    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });
  test ('renders categories card sumup', () => {
    const summary1 = screen.getByText("Category 1 summary");
    const summary2 = screen.getByText("Category 2 summary");
    expect(summary1).toBeInTheDocument();
    expect(summary2).toBeInTheDocument();
  });
  test ('renders categories card picture', () => {
    const category1Img = screen.getByAltText('Category 1');
    const category2Img = screen.getByAltText('Category 2');
    expect(category1Img).toBeInTheDocument();
    expect(category2Img).toBeInTheDocument();
    expect(category1Img.getAttribute('src')).toBe('category1.jpg');
    expect(category2Img.getAttribute('src')).toBe('category2.jpg');
  });
});
