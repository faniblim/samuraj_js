import Paginator from "./Paginator";

describe("Paginator component tests", () => {
    test("pages count is 11 but shuld be shoved only 10", () => {
        const cpmponent = create(<Paginator totalItemsCount={11} pageSize={1} partionsize={10}/>);
          const root = component.root;
          let spans = root.findAllByType('span');
          expect(spans.length).toBe(10);   
    });

    test("if pages count is more than 10 button NEXT ahould be present", () => {
        const cpmponent = create(<Paginator totalItemsCount={11} pageSize={1} partionsize={10}/>);
          const root = component.root;
          let button = root.findAllByType('button');
          expect(button.length).toBe(1);   
    });
});