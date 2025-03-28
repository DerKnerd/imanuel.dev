import mentana from '../../../data/employers/mentana.json';
import arvato from '../../../data/employers/arvato.json';
import computacenter from '../../../data/employers/computacenter.json';
import eevolution from '../../../data/employers/eevolution.json';
import ferchau from '../../../data/employers/ferchau.json';
import hyand from '../../../data/employers/hyand.json';
import hdi from '../../../data/employers/hdi.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!params.activeTab || params.activeTab === 'hdi') {
		return hdi;
	}
	if (params.activeTab === 'hyand') {
		return hyand;
	}
	if (params.activeTab === 'ferchau') {
		return ferchau;
	}
	if (params.activeTab === 'eevolution') {
		return eevolution;
	}
	if (params.activeTab === 'computacenter') {
		return computacenter;
	}
	if (params.activeTab === 'arvato') {
		return arvato;
	}
	if (params.activeTab === 'mentana') {
		return mentana;
	}

	return {};
}
