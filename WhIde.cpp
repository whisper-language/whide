// WhIde.cpp : 定义应用程序的入口点。
//

#include "stdafx.h"
#include "sciter-x.h"
#include "sciter-x-window.hpp"
#include "sciter-x-behavior.h"

using namespace sciter;

class frame : public sciter::window {
public:
	frame() : window(SW_TITLEBAR| SW_RESIZEABLE | SW_CONTROLS | SW_MAIN | SW_ENABLE_DEBUG) {}
	
	SOM_PASSPORT_BEGIN(frame)
		SOM_FUNCS(
			SOM_FUNC(nativeMessage)
		)
	SOM_PASSPORT_END

		// function expsed to script:
	sciter::string  nativeMessage() { 
		dom::element root = dom::element::root_element(get_hwnd());
		dom::element s = root.find_first(".testaccess");
		s.set_text(L"Hello world");
		return WSTR("Hello C++ World");
	}
};

#include "resources.cpp"

namespace sciter {


class editor1 : public sciter::event_handler {
public:
	HWND     hwnd;

	HELEMENT self; // note: weak ref (not addrefed)
	

	virtual void attached(HELEMENT he) {
		self = he;
		dom::element el = he;
	}
	virtual void detached(HELEMENT he) {
		
	}

	bool select(sciter::value   indexOrName) {
		return true;
	}
	sciter::string get_current() {
		return sciter::string();
	}

	SOM_PASSPORT_BEGIN(editor1)
		SOM_FUNCS(
			SOM_FUNC(select),
		)
		SOM_PROPS(
			SOM_RO_VIRTUAL_PROP(current, get_current),
			)
	SOM_PASSPORT_END

	sciter::value get_text() {
		std::wstring text;
		// GetWindowText(hwnd) & friends here
		return sciter::value(text);
	}

	sciter::value set_text(const sciter::value& text_val) {
		std::wstring text = text_val.get(L"11111111111111111111");
		// SetWindowText(hwnd) & friends here
		return sciter::value(); // returns undefined value, a.k.a. void
	}
};

struct editor_factory : public sciter::behavior_factory {
	editor_factory() : behavior_factory("editor1") {}
	virtual sciter::event_handler* create(HELEMENT he) { 
		return new editor1(); }
};

editor_factory editor_factory_instance;

}

int uimain(std::function<int()> run) {
	sciter::archive::instance().open(aux::elements_of(resources));
	frame* pwin = new frame();
	pwin->load(WSTR("file://E:\\WhIde\\res\\test\\index.html"));


	//pwin->load(WSTR("this://app/index.html"));
	pwin->expand();

	return run();
}

