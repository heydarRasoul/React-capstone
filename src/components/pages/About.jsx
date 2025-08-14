export default function About() {
  return (
    <div className="about-wrapper">
      <div className="capstone-process">
        <div>
          <h3>Capstone Process</h3>
          <p>
            The development of this e-commerce application began with
            wireframing in Figma, where the overall visual layout and navigation
            flow were planned. This step established a clear vision for the
            project and provided a reference for the UI components and page
            structure.
          </p>
          <p>
            After finalizing the wireframe, the application was initialized in
            React 18 using Vite for fast development. A scalable folder
            structure was implemented from the start, ensuring all components,
            styles, and helper functions were reusable and easy to maintain. The
            Fake Store API (https://fakestoreapi.com/docs) was used to fetch
            real product data for the store.
          </p>
          <p>
            The build sequence started with the Navbar and Footer components,
            followed by the Home Page and Contact Page. The Products Page
            required more complex logic, including category-based filtering via
            dynamically generated checkboxes, sorting options (by price, ID, and
            category), and responsive design adjustments.
          </p>
          <p>
            One of the most challenging parts of the process was implementing
            the shopping cart. This involved using React state management hooks
            like useState, useEffect, and useContext to persist cart items,
            update quantities, and handle product removal. Once all core
            functionality was complete, SCSS styling was applied to enhance the
            UI, ensure mobile responsiveness, and maintain a consistent theme
            across pages.
          </p>
        </div>
      </div>
      <div className="challenges">
        <div>
          <h3>Challenges and Solutions</h3>
          <p>
            Several technical challenges arose during development. One of the
            most time-consuming was filtering products by category using
            checkboxes. The logic needed to handle multiple active filters
            simultaneously without breaking the product display. This was
            resolved by mapping over the fetched product data, applying filter
            conditions based on the selected categories, and rendering only the
            matching products.
          </p>
          <p>
            Another major challenge was state management for the shopping cart.
            At first, managing product quantities and ensuring data persisted
            between page navigations proved difficult. This was solved by
            implementing React’s Context API, which allowed global state to be
            shared across components without prop drilling.
          </p>
          <p>
            Handling asynchronous data fetching from the Fake Store API also
            required careful thought. Using .then(), .catch(), and .finally()
            ensured proper conditional rendering for loading states, error
            messages, and data display. Adding animated Font Awesome icons for
            loading improved the user experience while debugging network
            throttling in developer tools.
          </p>
          <p>
            One key lesson learned during this project was the importance of
            organizing the application structure from the very beginning. Early
            on, file placement and imports were not prioritized, which led to
            significant refactoring later. Reorganizing folders and updating
            imports across multiple components was time-consuming. The same
            challenge applied to creating SCSS mixins and variables —
            implementing them from the start would have saved time and made
            styling changes much faster. This experience reinforced the value of
            planning folder structure, reusable styles, and imports before
            development begins.
          </p>
        </div>
      </div>

      <div className="favorite-lung">
        <div>
          <h3>Favorite Language</h3>
          <p>
            Among the technologies used, React stood out as my favorite. Its
            component-based architecture made the application modular and
            reusable, while the Virtual DOM allowed for efficient UI updates
            without unnecessary re-rendering. The combination of React hooks
            (useState, useEffect, and useContext) provided powerful tools for
            managing state and side effects, even though they initially had a
            steep learning curve.
          </p>
          <p>
            React’s strong community support and extensive documentation made
            troubleshooting easier, while its scalability ensured that the
            project could grow in complexity without becoming unmanageable.
            Overall, working with React not only sped up development but also
            improved my understanding of modern frontend workflows and best
            practices.
          </p>
        </div>
      </div>
      <div className="iframe-wrapper">
        <iframe src="https://embed.figma.com/design/UK17jpDLpD7p4VZ6p9q7Qn/One-place-shop?node-id=0-1&embed-host=share"></iframe>
      </div>
    </div>
  );
}
