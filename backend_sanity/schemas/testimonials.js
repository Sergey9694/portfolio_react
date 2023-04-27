export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageURL',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true, // возможность выбора обрезки для фото
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
