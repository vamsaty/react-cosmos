import {
  FixtureNamesByPath,
  FixtureId,
  RendererId,
  RendererReadyResponse,
  FixtureListUpdateResponse,
  FixtureStateChangeResponse,
} from 'react-cosmos-shared2/renderer';
import { FixtureState } from 'react-cosmos-shared2/fixtureState';
import { getRendererCoreMethods } from '../../../testHelpers/pluginMocks';

export function createRendererReadyResponse(
  rendererId: RendererId,
  fixtures: FixtureNamesByPath
): RendererReadyResponse {
  return {
    type: 'rendererReady',
    payload: {
      rendererId,
      fixtures,
    },
  };
}

export function createFixtureListUpdateResponse(
  rendererId: RendererId,
  fixtures: FixtureNamesByPath
): FixtureListUpdateResponse {
  return {
    type: 'fixtureListUpdate',
    payload: {
      rendererId,
      fixtures,
    },
  };
}

export function createFixtureStateChangeResponse(
  rendererId: RendererId,
  fixtureId: FixtureId,
  fixtureState: FixtureState
): FixtureStateChangeResponse {
  return {
    type: 'fixtureStateChange',
    payload: {
      rendererId,
      fixtureId,
      fixtureState,
    },
  };
}

export function mockRendererReady(
  rendererId: RendererId,
  fixtures: FixtureNamesByPath
) {
  return getRendererCoreMethods().receiveResponse(
    createRendererReadyResponse(rendererId, fixtures)
  );
}

export function mockFixtureStateChange(
  rendererId: RendererId,
  fixtureId: FixtureId,
  fixtureState: FixtureState
) {
  return getRendererCoreMethods().receiveResponse(
    createFixtureStateChangeResponse(rendererId, fixtureId, fixtureState)
  );
}
