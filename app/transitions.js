export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('projects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('movies'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute('movies'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
