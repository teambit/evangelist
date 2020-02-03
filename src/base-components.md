# components:

- heading
    - element: 'h1' | 'h2' | etc...
    - size: 
    - weight: 

H1 = <Heading element='h1' size={40} weight={40}>{title}</Heading>
H2 = <Heading element='h2' size={30} weight={30}>{title}</Heading>

- paragraph
    - size: 
    - weight: 
<Paragraph size={18} weight={10}>{title}</Paragraph>

- separator
    - layout: 'horizontal' | 'vertical'
- image?
- video?
    - onPlay
    - onStop
    - size

- button - bit.dev button?
- card - bit.dev theme card?
    - elevation / shadow: 1 | 2 | 3 
    - border-width:
    - border-color:

- community-link
    - ?icon
    - children
    - bgColor
    
- comment-carousel from bit.dev
    - comment from bit.dev
- quote

- ?text-align?
    - wrapper that aligns a bunch of text elements.

H1 = <Heading element='h1' size={40} weight={40}>{title}</Heading>


# themes:

- colors
- font sizes
- box shadow
