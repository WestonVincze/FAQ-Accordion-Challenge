## DOM Arrangement
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