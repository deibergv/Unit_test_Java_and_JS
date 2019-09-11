import junit.framework.TestCase;

public class TestCalculadora extends TestCase{
	private Calculadora calculadora;
	
	public void inicializar() {
		calculadora = new Calculadora();
	}
	
	public void testSumar() {
		inicializar();
		assertTrue(calculadora.sumar(2, 2)== 4); //EVALUA si el sumar de calculadora es igual a 4
	}
	
	public void testRestar() {
		inicializar();
		assertEquals(3,calculadora.restar(5, 2));
	}
	
	public void testMultiplicar() {
		inicializar();
		assertSame(3, calculadora.multiplicar(3, 1));
	}
}
