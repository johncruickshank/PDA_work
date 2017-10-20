require("minitest/autorun")
require("minitest/rg")
require_relative("testing_task_2")

class TestTestingTask < MiniTest::Test

  def test_func1()
    assert_equal(true, func1(1))
  end

  def test_func1__false()
    assert_equal(false, func1(2))
  end

  def test_max()
    assert_equal(100, max(100, 50))
  end

  def test_max__alt()
    assert_equal(100, max(50, 100))
  end

  def test_looper()
    assert_equal(1..10, looper())
  end

end
