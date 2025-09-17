1. What I built :

I built a small React project to understand how to fetch data from an API and implement pagination. The project shows:

How to fetch product data using fetch inside useEffect.
How to store data in state with useState.
How to calculate and display a fixed number of products per page.
How to implement pagination with Prev, Next, and page number buttons.
How React re-renders the UI automatically when the page state changes.

2. What I learned :
Fetching Data in React:

useEffect is used to run data fetching logic once when the component mounts.
fetch retrieves JSON data from the API.
Data is stored in state using useState, and React re-renders when data updates.

Pagination Logic:

The total number of pages is calculated by dividing the total products by items per page.
slice(startIndex, endIndex) is used to show only the products of the current page.
Page navigation updates the page state, which triggers React to re-render with the new set of products.

React State & Re-rendering:

products state stores all fetched products.
page state keeps track of the current page number.
Changing page updates which products are displayed without reloading the page.

3. What challenged me :

Ensuring pagination buttons are disabled at the first and last page.

4. References :

https://react-bootstrap.netlify.app/docs/components/pagination/

https://dev.to/endeavourmonk/pagination-in-react-with-implementation-21nn