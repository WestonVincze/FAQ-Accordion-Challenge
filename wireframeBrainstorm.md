## DOM Arrangement
This is the initial brainstorming document. It is the initial and most primitive version of this application's architecture.

#### Root:
- background image and color

#### Container:
  - rounded edge, box shadow
  - CSS:
    - max-width
    - centered

#### FAQs (Accordion):
  - title
    - diamond icon prefix
  - FAQ[]
    - active: bool
    - question: string
    - answer: string
    - CSS:
      - hover changes color of label
      - answer only visible while "active"
      - icon
        - background-img conditionally changes based on active state
        - active ? "-" : "+"